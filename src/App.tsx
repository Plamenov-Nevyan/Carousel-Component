import { useState } from 'react'
import styles from "./app.module.css"
import { Slide } from './components/Slide/Slide'

const pictures = [
  {src : "/image1.jpg", caption : "image 1"},
  {src : "/image2.jpg", caption : "image 2"},
  {src : "/image3.jpg", caption : "image 3"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className={styles["carousel-container"]}>
         {pictures.map((pic, index) => <Slide 
         slidePicture={pic.src} 
         slideIndex={index + 1} 
         caption={pic.caption} 
         totalSlides={pictures.length}
         />
         )}
  </div>
  )
}

export default App
