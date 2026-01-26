import type { Section4ItemProps } from "./Section4Item.type";
import styles from "./Section4Item.module.css"

function Section4Item({
    text
} : Section4ItemProps) {
    return(
        <div className={styles.container}>
            {text}
            <img src="src/assets/img/add.png" alt="add" />
        </div>
    )
}

export default Section4Item