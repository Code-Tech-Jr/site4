import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles["container-header"]}>
            <div className={styles["content-header"]}>
                <img  className={styles["img-mid"]} src="src/assets/img/logo.png" alt="logo" />
                <img className={styles["img-right"]} src="src/assets/img/language_flag.png" alt="idioma" />
            </div>
        </header>
    )
}

export default Header