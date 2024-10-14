import styles from "./Header.module.css"
import logo192 from "../../img/logo192.png"
import { Link } from "react-router-dom"

function Header(  ) {
    return (
        <header>
            <div className={styles.flex}>
                <Link to="/"><img src={logo192} alt="logo" /></Link>
                
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/tarefas">Tarefas</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header