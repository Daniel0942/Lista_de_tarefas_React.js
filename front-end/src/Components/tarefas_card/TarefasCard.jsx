import { Link } from "react-router-dom"
import styles from "./TarefasCard.module.css"

function TarefasCard({ id, name, msg, ExcluirTarefa, Editar}) {
    return (
        <div className={styles.container}>
            <h4>Tarefa</h4>
            <p>{id}°</p>
            <p><strong>{name}</strong></p>
            <p>{msg}</p>
            <button onClick={()=> ExcluirTarefa(id)}>Excluir</button>
            <button onClick={Editar}><Link to={`/tarefas/${id}`}>Editar</Link></button>
        </div>

    )
}
export default TarefasCard