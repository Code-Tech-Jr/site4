import Button from "../button/Button"
import styles from "./Footer.module.css"

function Footer() {

    return (
        <section className={styles["container-footer"]}>
            <div className={styles["content-footer"]}>
                <div className={styles["up-area"]}>
                    <h1 className={styles["title-footer"]}>
                        Vulputate et pulvinar ethre Suspendisse tellus consecteur
                    </h1>
                    <Button 
                        text="Lorem Ipsum"
                        color="yellow"
                        direction="right"
                    >    
                    </Button>
                </div>
                <span className={styles["line"]}></span>
                <div className={styles["down-area"]}>
                    <p className={styles["copy-text"]}>Copyright © 2022 Lorem Ipsum.</p>
                    <p className={styles["privacy-text"]}>Privacy Policy | Terms & Conditions</p>
                </div>
               
            </div>
        </section>
    )
}

export default Footer