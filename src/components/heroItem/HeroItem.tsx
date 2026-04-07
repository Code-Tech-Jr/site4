import type { HeroItemProps } from "./HeroItem.type";
import styles from "./HeroItem.module.css"
import check_circle from "../../assets/img/check_circle.png";

function HeroItem({
    text
} : HeroItemProps) {
    return(
        <div className={styles.container}>
            <img src={check_circle} alt="check" />
            {text}
        </div>
    )
}

export default HeroItem