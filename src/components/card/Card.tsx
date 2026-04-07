import styles from "./Card.module.css"
import type { CardProps } from "./Card.type"

function Card({
    img,
    title,
    subtitle,
    text,
    color, 
    number
} : CardProps) {

    const combinedClassName = `${styles[color]} ${styles.card}`

    const spanStyleKey = color === "white" ? "yellowP" : "whiteP";

    return(
        <div className={combinedClassName}>
            <img src={img} alt={title} />
            <div className={styles.num}>
                {number}
                <span className={styles[spanStyleKey]}>.</span>
            </div>
            <h1 className={styles["title"]}>{title}</h1>
            <h3 className={styles["subtitle"]}>{subtitle}</h3>
            <p className={styles["text"]}>{text}</p>
        </div>
    )
}

export default Card;