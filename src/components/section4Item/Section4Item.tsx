import type { Section4ItemProps } from "./Section4Item.type";
import styles from "./Section4Item.module.css"
import add from "../../assets/img/add.png";

function Section4Item({
    text
} : Section4ItemProps) {
    return(
        <div className={styles.container}>
            {text}
            <img src={add} alt="add" />
        </div>
    )
}

export default Section4Item