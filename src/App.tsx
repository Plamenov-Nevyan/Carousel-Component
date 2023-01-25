import { useState } from 'react'
import styles from "./app.module.css"
import { Buttons } from './components/Buttons/Buttons'
import { Slide } from './components/Slide/Slide'

const pictures = [
  {src : "/image1.jpg", caption : "image 1"},
  {src : "/image2.jpg", caption : "image 2"},
  {src : "/image3.jpg", caption : "image 3"},
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNextSlide = () => setCurrentSlide(currSlide => currSlide + 1)
  const goToPreviousSlide = () => setCurrentSlide(currentSlide => currentSlide - 1)

  return (
  <div className={styles["carousel-container"]}>
         {pictures.map((pic, index) => <Slide 
         slidePicture={pic.src} 
         slideIndex={index + 1} 
         caption={pic.caption} 
         totalSlides={pictures.length}
         />
         )}
         <Buttons 
         isFirstSlide={currentSlide === 0} 
         isLastSlide={currentSlide === pictures.length} 
         goToNextSlide={goToNextSlide}
          goToPreviousSlide={goToPreviousSlide}
         />
  </div>
  )
}

export default App
