import styles from "./MidCard.module.css"


function MidCard(){
    return (
        <div className={styles["card-container"]}>
            <div className={styles["card-content"]}>
                <img className={styles["img-author"]} src="src/assets/img/author.png" alt="author" />

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
                        <img src="src/assets/img/bLeft.png" alt="left arrow" />
                        <img src="src/assets/img/yRight.png" alt="right arrow" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MidCard