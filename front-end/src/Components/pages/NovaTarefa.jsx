import { useState } from "react"
import axios from "axios"
import Footer from "../footer/Footer"
import Form from "../form/Form"
import Header from "../header/Header"
import { useNavigate } from "react-router-dom"

function NovaTarefa() {
    let [name, setName] = useState("")
    let [msg, setMsg] = useState("")
    let navigate = useNavigate() //redirects
    
    // Função para adicionar uma nova tarefa
    const adicionarNovaTarefa = async (e) => {
        e.preventDefault() // Impede o comportamento padrão do formulário
        let novaTarefa = { name, msg } // Cria um objeto com os dados da nova tarefa

        try {
            await axios.post("https://lista-de-tarefas-react-js-backend.onrender.com/api/data", novaTarefa) // Envia os dados para a API
            setName("") // Limpa o campo de entrada do nome
            setMsg("") // Limpa o campo de entrada da mensagem
            navigate("/tarefas")
        } catch(error) { console.error("Erro ao adicionar tarefa:", error) }
    }
    return (
        <>
            <Header/>
            <Form
            função={adicionarNovaTarefa} 
            name={name} setName={setName} 
            msg={msg} setMsg={setMsg}
            
            titulo= "Nova tarefa"
            texto1= "Nome da tarefa"
            texto2 = "Especificação da tarefa"
            txtbutton= "Enviar"
            />
            <Footer/>
        </>
)
}
export default NovaTarefa