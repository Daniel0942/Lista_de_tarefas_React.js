import styles from "./Section.module.css"
import caderno from "../../img/caderno.png"
import { Link } from "react-router-dom"

function Section() {
    return (
        <section className={styles.container}>
            <img src={caderno} alt="" />

            <div>
                <div className={styles.caixa_texto}>
                    <h1>Lista de Tarefas</h1>
                    <h3><span>Os Benefícios de Utilizar uma Lista de Tarefas no Dia a Dia</span></h3>
                    <p>Uma lista de tarefas é uma ferramenta simples, mas extremamente eficaz para organizar sua rotina e aumentar a produtividade. Ao utilizar uma lista de tarefas, você pode priorizar suas atividades, mantendo o foco nas mais importantes e evitando a sobrecarga mental. Além disso, ela ajuda a melhorar o gerenciamento do tempo, permitindo que você visualize o que precisa ser feito e quanto tempo dedicará a cada tarefa. Outro benefício é a sensação de realização ao concluir itens da lista, o que gera motivação e uma sensação constante de progresso.</p>
                </div>

                <button><Link to="/nova_tarefa">Adicionar nova Tarefa na lista</Link></button>
            </div>
        </section>
    )
}
export default Section