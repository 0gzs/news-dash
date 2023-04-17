import React, { useState, useEffect, useRef } from 'react'
import { checkImage } from '../functions.js'
import './slider.scss'

const Slider = ({ articles }) => {
  const [current, setCurrent] = useState(0)
  const timeoutIdRef = useRef(null)

  useEffect(() => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current)
    }

    const next = () => {
      if (articles.length == 0) return

      const nextIndex = current == articles.length - 1 ? 0 : current + 1   
      const isImageValid = checkImage(articles[nextIndex].urlToImage)

      if (!isImageValid) {
        let nextNum

        if (current == articles.length - 1) nextNum = 0
        else nextNum = current + 1

        setCurrent(nextNum)
        return next()
      }
      setCurrent(nextIndex)
    }

    timeoutIdRef.current = setTimeout(next, 2500)

    return () => {
      clearTimeout(timeoutIdRef.current)
    }
  }, [current, articles])

  if (!articles.length) return null

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <div className="slide">
          <img src={articles[current].urlToImage} alt={articles[current].title} />
          <div className="slide-content">
            <h2><a href={articles[current].url}>{articles[current].title}</a></h2>
          </div>
        </div>

        <div className="buttons">
          <div onClick={() => setCurrent(0)} className={current == 0 ? "button selected" : "button"}>
          </div>
          <div onClick={() => setCurrent(1)} className={current == 1 ? "button selected" : "button"}>
          </div>
          <div onClick={() => setCurrent(2)} className={current == 2 ? "button selected" : "button"}>
          </div>
          <div onClick={() => setCurrent(3)} className={current == 3 ? "button selected" : "button"}>
          </div>
          <div onClick={() => setCurrent(4)} className={current == 4 ? "button selected" : "button"}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
