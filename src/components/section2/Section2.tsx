import styles from "./Section2.module.css"
import Button from "../button/Button"
import Card from "../card/Card"
import { SECTION2_DATA } from "./Section2.data"

function Section2() {
    return (
        <section className={styles["container-section2"]}>
            <div className={styles["content-section2"]}>
                <div className={styles["interactive-section2"]}>
                    <p className={styles["text-section2"]}>
                        Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo. 
                    </p>

                    <h1 className={styles["title-section2"]}>
                        Cursus Integer Conseq Aliquam Tristique. 
                    </h1>
                    <Button
                        text="Lorem Ipsum"
                        direction="right"
                        color="white">
                    </Button>
                </div>
                
            

                <div className={styles["card-area"]}>
                    {SECTION2_DATA.map((area) => (
                                <Card
                                    key={area.id} 
                                    number={area.number}
                                    img = {area.img}
                                    title={area.title}
                                    subtitle={area.subtitle}
                                    text={area.text}
                                    color={area.color}
                                />
                            ))}
                </div>
            </div>
        </section>
    )
}

export default Section2