import styles from "./BgSection.module.css"
import type { BgSectionProps } from "./BgSection.types"

function BgSection({ 
    color, 
    children, 
    type 
} : BgSectionProps) {
    
    const isMid = type === "mid";
    
    const wrapperClass = `${styles.wrapper} ${isMid ? styles.mid : ""}`;
    
    const shapeClass = `${styles.bgShape} ${styles[color]}`;

    return (
        <div className={wrapperClass}>
            <div className={shapeClass}></div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}

export default BgSection