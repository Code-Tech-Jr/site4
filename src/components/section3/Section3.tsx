import styles from "./Section3.module.css"
import Button from "../button/Button"
import { SECTION3_DATA } from "./Section3.data"
import HeroItem from "../heroItem/HeroItem"
import section3_image from "../../assets/img/section3.png";

function Section3() {
    if (!SECTION3_DATA) return <p>Erro: Dados não encontrados</p>;
    return (
        <section className={styles["container-section3"]}>
            <div className={styles["content-section3"]}>
                <img  className={styles["img-section3"]} src={section3_image} alt="" />

                <div className={styles["text-area"]}>
                    <h1 className={styles["title-section3"]}>
                        Cursus Integer <br/>consequat Tristique. 
                    </h1>
                    <div className={styles["section3-items"]}>
                        {SECTION3_DATA.map((area) => (
                            <HeroItem
                                key={area.id} 
                                text={area.text}
                            />
                        ))}
                    </div>

                    <Button
                        text = "Lorem Ipsum"
                        direction="right"
                        color="black"
                    >

                    </Button>
                </div>  
            </div>
        </section>
    )
}

export default Section3