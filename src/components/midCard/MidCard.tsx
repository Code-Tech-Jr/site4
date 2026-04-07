import styles from "./MidCard.module.css"
import author from "../../assets/img/author.png";
import bLeft from "../../assets/img/bLeft.png";
import yRight from "../../assets/img/yRight.png";

function MidCard(){
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-content"]}>
                <img className={styles["img-author"]} src={author} alt="author" />

                <div className={styles["area-text"]}>
                    <h1 className={styles["title-card"]}> 
                        What our customers thought?
                    </h1>
                    <p className={styles["text"]}>
                        Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis. 
                    </p>
                    <span className={styles["author"]}>
                        Holly Davidson
                    </span>
                    <div className={styles["arrow"]}>
                        <img src={bLeft} alt="left arrow" />
                        <img src={yRight} alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidCard