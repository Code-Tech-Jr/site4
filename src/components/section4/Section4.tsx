import Section4Item from "../section4Item/Section4Item"
import { SECTION4_DATA } from "./Section4.data"
import styles from "./Section4.module.css"

function Section4(){
    return (
        <section className={styles["container-section4"]}>
            <div className={styles["content-section4"]}>
                <h1 className={styles["title"]}>
                    Phasellus a vitae iaculis magna.
                </h1>
                <p className={styles["text"]}>
                    Phasellus a vitae iaculis magna eleifend pulvinar velit odio.
                </p>
                <div className={styles["card-area"]}>
                    {SECTION4_DATA.map((area) => (
                            <Section4Item
                                key={area.id} 
                                text={area.text}
                            />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section4