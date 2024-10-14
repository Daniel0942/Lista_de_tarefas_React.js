import { useState, useEffect } from "react"
import axios from "axios"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import TarefasCard from "../tarefas_card/TarefasCard"
import styles from './Tarefas.module.css'
import Loading from "../loading/Loading"


function Tarefas() {
    let [data, setData] = useState([]) // Iniciar data como um array vazio
    let [removeloading, setRemoveloading] = useState(false) //loading

    useEffect(() => {
        axios.get("http://localhost:5000/api/data")
            .then(response => {
                setData(response.data)
                setRemoveloading(true) // tirar o loading quando os dados chegarem
            })
            .catch(error => console.error('Erro ao buscar dados:', error))
    }, [])

    function ExcluirTarefa(id) {
        axios.delete(`http://localhost:5000/api/data/${id}`)
            .then((response) => {
                console.log(`Tarefa deletada com sucesso`);
                // Aqui você pode atualizar o estado ou remover o item da UI
                setData(prevData => prevData.filter(item => item[0] !== id));
            })
            .catch((error) => {
                console.error('Error deleting item:', error);
            });
    }

    return (
        <>
            <Header />
            <div className={styles.flex}>
                {data.length > 0 ? (
                    data.map((item) => (
                        <TarefasCard
                            key={item[0]} // Chave exclusiva para cada item
                            id={item[0]}
                            name={item[1]}
                            msg={item[2]}
                            ExcluirTarefa={ExcluirTarefa}
                        /> //receber valores por props
                    ))
                ) : ("Nenhum dado encontrado")}
            </div>
            { ! removeloading && <Loading/>}
            <Footer />
        </>
    )
}
export default Tarefas