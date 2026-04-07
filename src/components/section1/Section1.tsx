import styles from "./Section1.module.css"
import Button from "../button/Button"

function Section1() {
    return (
        <section className={styles["container-section1"]}>
            <div className={styles["content-section1"]}>
                
                <img 
                    className={styles["img-section1"]} 
                    src="src/assets/img/section1.png" 
                    alt="imagem" 
                />

                <div className={styles["text-section1"]}>
                    <h1>Phasellus a vitae iaculis magna eleifend pulvinar velit odio.</h1>
                    <h3>Vulputate et vulputate suspendisse natoque!</h3>
                    <p>
                        Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis vulputate et vulputate suspendisse natoque id tellus consectetur pulvinar et. 
                    </p>
                    <Button 
                        text="Lorem Ipsum"
                        direction="right"
                        color="black"
                    />
                </div>
            </div>
        </section>
    )
}

export default Section1