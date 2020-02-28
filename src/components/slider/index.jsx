import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import Dots from '../dots'
import Nav from '../nav'
import HOC from '../../shared/hoc'
import './index.scss'

const Slider = ({ data, hideNavigation, hideDots, autoPlay, slideEl, navPrevEl, navNextEl, navDotEl }) => {
  const navRef = useRef()
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)
  const totalSlides = data.length
  const changeSlide = (next) => {
    const nextActiveEl = next 
      ? (activeSlideIdx + 1) % totalSlides
      : (activeSlideIdx - 1 + totalSlides) % totalSlides

    setActiveSlideIdx(nextActiveEl)  
  }

  useEffect(() => {
    if (autoPlay) {
      setInterval(() => { navRef.current.switchSlide() }, Number(autoPlay))
    }
  }, [])
  
  const Slide = HOC(slideEl)
  
  return (
    <div className="another-slider__wrapper">
      <div className="another-slider__slides">
        {
          data.map((slide, index) => (
            <div
              key={index}
              className={cn(
                'another-slider__slide',
                index === activeSlideIdx && 'active'
              )}
            >
              <Slide data={slide} />
            </div>
          ))
        }
      </div>
      {
        !hideNavigation && (
          <Nav
            changeSlide={changeSlide}
            ref={navRef}
            navPrevEl={navPrevEl}
            navNextEl={navNextEl}
          />
        )
      }
      {
        !hideDots && (
          <Dots 
            dot={navDotEl} 
            slides={data} 
            activeSlideIdx={activeSlideIdx} 
            setActiveSlideIdx={setActiveSlideIdx}
          />
        )
      }
    </div>
  )
}

Slider.propTypes = {
  slideEl: PropTypes.func.isRequired,
  navPrevEl: PropTypes.func,
  navNextEl: PropTypes.func,
  navDotEl: PropTypes.func,
  autoPlay: PropTypes.number,
  hideNavigation: PropTypes.bool,
  hideDots: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
}

export default Slider