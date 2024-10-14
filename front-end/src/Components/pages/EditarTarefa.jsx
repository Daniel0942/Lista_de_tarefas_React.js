import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import styles from "./EditarTarefa.module.css"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Form from "../form/Form"

function EditarTarefa() {
    let { id } = useParams()  // Aqui você acessa o valor do parâmetro :id da URL
    let [tarefa, setTarefa] = useState(null) // Armazena a tarefa específica
    let [edit_name, setEdit_name] = useState("") // Para armazenar o nome editado
    let [edit_msg, setEdit_msg] = useState("") // Para armazenar o nome editado
    let navigate = useNavigate() // redirects

    useEffect(() => {
        axios.get(`http://localhost:5000/api/data/${id}`)
            .then(response => {
                // verificar se tem algo na array requisitada
                if (response.data.length > 0) {
                    setTarefa(response.data)
                    setEdit_name(response.data[1]) // Inicializa com os valores da tarefa existente
                    setEdit_msg(response.data[2]) // Inicializa com os valores da tarefa existente
                } else
                    console.log(`${id}° não tem nada`)
            })
            .catch(error => { console.error(error) })
    }, [id])

    function Editar(e) { 
        e.preventDefault()
        axios.put(`http://localhost:5000/api/data/${id}`, {
            "name": edit_name,
            "msg": edit_msg
        })
        .then(response => {
            console.log(response.data)
            navigate(0)
        })
        .catch(error => { console.log(`Deu erro ao atualizar`, error) })
    }

    let [buttonshow, setButtonshow] = useState(false)
    function BotaoFlexivel() {
        setButtonshow( ! buttonshow)
    }
    return (
        <>
            <Header />
            {tarefa ? (
                <div className={styles.container}>
                    <h1>{tarefa[1]}</h1>
                    <button onClick={BotaoFlexivel} className={styles.botao}>
                        { ! buttonshow ? "Editar" : "Fechar"}
                    </button>
                    { ! buttonshow ? (
                        <div className={`${styles.flex} ${styles.detalhes}`} >
                            <p>id da tarefa: {tarefa[0]}°</p>
                            <p>Nome: {tarefa[1]}</p>
                            <p>Especificação: {tarefa[2]}</p>
                        </div> //flex, detalhes
                    ) : (
                        <div className={`${styles.flex} ${styles.centerForm}`}>
                                <Form 
                                função={Editar}
                                setName={setEdit_name}
                                setMsg={setEdit_msg}
                                titulo={`Edição da ${id}° tarefa`}
                                texto1={tarefa[1]}
                                texto2={tarefa[2]}
                                txtbutton= "Aceitar edição"
                                />
                        </div> //flex, centerForm
                    )}
                </div>//container 
            ) : (("Tarefa não encontrada"))}
            <Footer />
        </>
    )
}
export default EditarTarefa