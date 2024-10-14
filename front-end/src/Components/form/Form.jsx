import styles from "./Form.module.css"

function Form({ função, titulo, texto1, texto2, txtbutton, name, setName, msg, setMsg }) {
return (
    <form className={styles.form} onSubmit={função}>
        <h2>{titulo}</h2>
        <input type="text" placeholder={texto1}
            onChange={(e) => setName(e.target.value)} value={name} />

        <textarea placeholder={texto2} 
        onChange={(e) => setMsg(e.target.value)} value={msg}></textarea>

        <button type="submit">{txtbutton}</button>
    </form>
)
}
export default Form