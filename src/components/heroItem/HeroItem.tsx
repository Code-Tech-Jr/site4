import type { HeroItemProps } from "./HeroItem.type";
import styles from "./HeroItem.module.css"

function HeroItem({
    text
} : HeroItemProps) {
    return(
        <div className={styles.container}>
            <img src="src/assets/img/check_circle.png" alt="check" />
            {text}
        </div>
    )
}

export default HeroItem