import type { ButtonProps } from "./Button.type";
import styles from "./Button.module.css"

import wRightImg from "../../assets/img/wRight.png";
import wDownImg from "../../assets/img/wDown.png";
import bRightImg from "../../assets/img/bRight.png";
import dRightImg from "../../assets/img/bDown.png";

function Button({
    text,
    direction, 
    color,
    shading
} : ButtonProps) {
    const classes = [
        styles["content-button"],
        styles[color]
    ];

    if (shading) {
        classes.push(styles[shading]);
    }

    const combinedClassName = classes.join(" ");

    let iconSrc;
    let altText;

    if (color === "black") {
        if (direction === "right") {
            iconSrc = wRightImg; 
            altText = "seta para direita";
        } else {
            iconSrc = wDownImg;  
            altText = "seta para baixo";
        }
    } else {
        if (direction === "right") {
            iconSrc = bRightImg; 
            altText = "seta para direita";
        } else {
            iconSrc = dRightImg;
            altText = "seta para baixo";
        }
    }
    return(
        <button className={styles["button"]}>
            <div className={combinedClassName}>
                {text}
                <img src={iconSrc} alt={altText} />
            </div>
            
        </button>
    )
}

export default Button