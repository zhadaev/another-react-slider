import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.scss'

const Slider = ({data}) => {
  const slides = []
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)

  const changeSlide = (next) => {
    const totalSlides = slides.length
    const activeEl = slides[activeSlideIdx]  
    const nextActiveEl = next 
      ? slides[(activeSlideIdx + 1) % totalSlides]
      : slides[(activeSlideIdx - 1 + totalSlides) % totalSlides]
  
    activeEl.classList.remove('active')
    nextActiveEl.classList.add('active')
    setActiveSlideIdx(slides.indexOf(nextActiveEl))
  }

  return (
    <div className="another-slider__wrapper">
      <div className="another-slider__slides">
        {
          data.map(({ id, image }, index) => (
            <div
              key={id}
              ref={ref => slides[index] = ref}
              className={cn(
                'another-slider__slide',
                index === activeSlideIdx && 'active'
              )}
            >
              <img src={`/${image}`} alt={id} />
            </div>
          ))
        }
      </div>
      <div onClick={() => changeSlide(false)} className="another-slider__nav_prev another-slider__nav">prev</div>
      <div onClick={() => changeSlide(true)} className="another-slider__nav_next another-slider__nav">next</div>
      <div className='another-slider__dots'>
        {
          data.map((dot, index) => (
            <div onClick={() => setActiveSlideIdx(index)} key={dot.id}>
              {index === activeSlideIdx ? '⚪' : '⚫' }
            </div>
          ))
        }
      </div>
    </div>
  )
}

Slider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
}

export default Slider