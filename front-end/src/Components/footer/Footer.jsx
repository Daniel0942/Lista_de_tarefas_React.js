import styles from "./Footer.module.css"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <ul>
                    <li><FaFacebook/></li>
                    <li><FaInstagram/></li>
                    <li><FaLinkedin/></li>
                </ul>

                <p>&copy; Site Desenvolvido por Daniel</p>
            </div>
        </footer>
    )
}
export default Footer