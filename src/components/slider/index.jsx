import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.scss'
import Dots from '../dots'
import Nav from '../nav'
import HOC from '../../shared/hoc'

const Slider = ({ data, hideNavigation, hideDots, showPlayPause, autoPlay, slideEl, navPrevEl, navNextEl, navDotEl }) => {
  const navRef = useRef()
  const interval = useRef(false)
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)
  const [isPaused, setPause] = useState(false)
  const totalSlides = data.length
  const changeSlide = (next) => {
    clearInterval(interval.current)
    const nextActiveEl = next 
      ? (activeSlideIdx + 1) % totalSlides
      : (activeSlideIdx - 1 + totalSlides) % totalSlides
    setActiveSlideIdx(nextActiveEl)
    setPlayInterval()
  }
  const setPlayInterval = () => {
    interval.current = setInterval(() => setActiveSlideIdx(prev => (prev + 1) % totalSlides), Number(autoPlay))
  }
  useEffect(() => {
    if (autoPlay) {
      setPlayInterval()
      return () => {
        clearInterval(interval.current) // clear interval on component unmount
      };
    }
  }, [])
  const Slide = HOC(slideEl)
  
  return (
    <div className="another-slider__wrapper">
      {
        showPlayPause && (
          <>
            {
              !isPaused ?
              <div className="another-slider__pause" onClick={() => { setPause(true); clearInterval(interval.current)}} /> :
              <div className="another-slider__play" onClick={() => {setPause(false); setPlayInterval()}} />
            }
          </>
        )
      }
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
  showPlayPause: PropTypes.bool,
  hideDots: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Slider