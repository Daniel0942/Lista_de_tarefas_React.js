from setup import app
from setup.models.table import conexao
from flask import  request, jsonify  # 'jsonify' pra convertar banco de dados em json

@app.route("/")
def index():
    return "teste"
    
# pegar dados do banco de dados, e retorna-los em json, assim no front ele dá o GET (busca) para pegar esse banco de dados, criando assim uma conexão do back e o front.
@app.route("/api/data", methods=["GET"])
def api():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("SELECT * FROM tarefas")
    tarefas = cursor.fetchall()
    return jsonify(tarefas)

# pegar dados enviados do front-end para cá, e enviar pro banco de dados
@app.route("/api/data", methods=["POST"])
def apiPost():
    conectar = conexao()
    cursor = conectar.cursor()
    # receber dados do cliente em formato json
    dados = request.get_json()
    # extrair dados
    name = dados.get("name")
    msg = dados.get("msg")
    # inserir nova tarefa no banco de dados
    cursor.execute("INSERT INTO tarefas (name, msg) VALUES (?, ?)", (name, msg))
    conectar.commit()
    conectar.close()
    # Retornar a nova tarefa criada com status 201 (Criado)
    nova_tarefa = {
        "id": cursor.lastrowid,  # Pega o ID da última tarefa inserida
        "name": name,
        "msg": msg
    }
    return jsonify(nova_tarefa), 201

# Deletar tarefas 
# <int:id> é o que o front ta me mandando
@app.route('/api/data/<int:id>', methods=['DELETE'])
def delete_tarefa(id):
    conectar = conexao()
    cursor = conectar.cursor()

    # excluir ela na tabela do banco de dados
    cursor.execute("DELETE FROM tarefas WHERE id = ?", (id,))
    conectar.commit()
    conectar.close()

    # mensagem para o front-end
    return jsonify({"message": f'Tarefa {id} deletado com sucesso'}), 200

# aceitar requisição do front e retornar os dados dessa id solicitada
@app.route('/api/data/<int:id>', methods=['GET'])
def buscar_id_requisitado(id):
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("SELECT * from tarefas WHERE id = ?", (id,))
    tarefa = cursor.fetchone()
    conectar.close()
    return jsonify(tarefa)

# Aceitar requisição do front, e atualizar com os novos dados solicitados
@app.route("/api/data/<int:id>", methods=["PUT"])
def atualizar(id):
    conectar = conexao()
    cursor = conectar.cursor()
    # receber novos dados, que o front vai solicitar
    dados = request.get_json()
    name = dados["name"]
    msg = dados["msg"]
    # atualizar o banco de dados com os novos dados
    cursor.execute("UPDATE tarefas  SET name = ?, msg = ? where id = ?", (name, msg, id))
    conectar.commit()
    conectar.close()
    return jsonify({"message": f"Id {id}° atualizado com sucesso"}), 200
