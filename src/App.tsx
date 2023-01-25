import { useState } from 'react'
import styles from "./app.module.css"
import { Slide } from './components/Slide/Slide'

const pictures = [
  "../public/image1.jpg",
  "../public/image2.jpg",
  "../public/image3.jpg"
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1>Hi</h1>
  // <div className={styles["carousel-container"]}>
  //        {pictures.map(pic => < Slide />)}
  // </div>
  )
}

export default App
