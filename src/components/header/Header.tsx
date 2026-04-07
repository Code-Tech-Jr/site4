import styles from "./Header.module.css"
import logo from "../../assets/img/logo.png";
import languageFlag from "../../assets/img/language_flag.png";

function Header() {
    return (
        <header className={styles["container-header"]}>
            <div className={styles["content-header"]}>
                <img  className={styles["img-mid"]} src={logo} alt="logo" />
                <img className={styles["img-right"]} src={languageFlag} alt="idioma" />
            </div>
        </header>
    )
}

export default Header