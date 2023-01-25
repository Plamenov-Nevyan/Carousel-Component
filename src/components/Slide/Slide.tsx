import styles from "./slide.module.css"
type SlideProps = {
    slidePicture : string,
    slideIndex : string,
    caption : string,
    totalSlides : number,
}

export function Slide({slidePicture, slideIndex, caption, totalSlides} : SlideProps){
    return (
        <div className={styles["slide-container"]}>
           <div className={styles["number-caption"]}>{slideIndex}/{totalSlides}</div>
           <img src={slidePicture} className={styles["slide-picture"]}></img>
           <div className={styles["text-caption"]}>{caption}</div>
        </div>
    )
}