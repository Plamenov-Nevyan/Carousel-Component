import styles from "./indicators.module.css"
import uuid from "react-uuid"

type IndicatorsProps = {
    slides : object[],
    currentSlide : number,
    goToSlide : (index : number) => void
}

export function Indicators({slides, currentSlide, goToSlide}: IndicatorsProps){
    return (
       <div className={styles["indicators-container"]}>
         {slides.map((slide, index) => <span
         key={uuid()}
         className={ currentSlide === index
            ? `${styles.indicator} ${styles["indicator-active"]}`
            : styles.indicator
         }
         onClick={e => goToSlide(index)}
         >
          
         </span>
        )}
       </div>
    )
}