import sqlite3

def conexao():
    conectar = sqlite3.connect("Gerenciador.db")
    return conectar

def criarTabela():
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS tarefas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    msg TEXT NOT NULL)""")
    conectar.commit()
    conectar.close()

def adicionarValores():
    conectar = conexao()
    cursor = conectar.cursor()
    tarefas = [
        {"name": "Desenvolver novo site", "msg": "Precisa ter as linguagens React.js no front e Flask no back"},
        {"name": "Criar um portfolio", "msg": "O prazo é um mes, linguagens Vue.js, React.js"}
        ]
    for tarefa in tarefas:
        cursor.execute("INSERT INTO tarefas (name, msg) VALUES (?, ?)", 
        (tarefa["name"], tarefa["msg"]))
    conectar.commit()
    conectar.close()

def deletarValores(id):
    conectar = conexao()
    cursor = conectar.cursor()
    cursor.execute("DELETE FROM tarefas WHERE id = ?", (id,))
    conectar.commit()
    conectar.close()
    
#adicionarValores()
#deletarValores(5)