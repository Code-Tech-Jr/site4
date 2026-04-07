import styles from "./Hero.module.css"

import Button from "../button/Button"
import { HERO_DATA } from "./Hero.data"
import HeroItem from "../heroItem/HeroItem"

import hero_img from "../../assets/img/hero.png";


function Hero(){
    return(
        <section className={styles["container-hero"]}>
            <div className={styles["content-hero"]}>
                <img className= {styles["img-hero"]}src={hero_img} alt="hero image" />
                
                <div className={styles["text-hero"]}>
                    <p className={styles["hero-subtitle"]}>
                        risus praesent vulputate. 
                    </p>
                    <h1 className={styles["hero-title"]}>
                        Cursus Integer<br />
                        Consequat Tristique.|
                    </h1>
                    <section className={styles["hero-items"]}>
                        {HERO_DATA.map((area) => (
                            <HeroItem
                                key={area.id} 
                                text={area.text}
                            />
                        ))}
                    </section>
                    
                    <Button
                        text = "Lorem Ipsum"
                        direction= "right"
                        color="yellow"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero