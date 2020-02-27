import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.scss'
import Slide from '../slide'
import NextArrow from '../next-arrow'
import PrevArrow from '../prev-arrow'
import Dots from '../dots'

const Slider = (props) => {
  const sliderRef = useRef()
  const nextBtnRef = useRef()
  const [activeSlideIdx, setActiveSlideIdx] = useState(0)
  const totalSlides = props.data.length

  const changeSlide = (next) => {
    const nextActiveEl = next 
      ? (activeSlideIdx + 1) % totalSlides
      : (activeSlideIdx - 1 + totalSlides) % totalSlides

    setActiveSlideIdx(nextActiveEl)  
  }

  const smoothTransition = () => {}

  useEffect(() => {
    if (props.autoPlay) {
      // TODO Refactor the line below
      setInterval(() => { nextBtnRef.current.click() }, Number(props.autoPlay))
    }
  }, [])
  
  // useEffect(() => {
  //   sliderRef.current.addEventListener('transitionend', smoothTransition)
  //   return () =>
  //   sliderRef.current.removeEventListener('transitionend', smoothTransition)
  // }, [activeSlideIdx])

  const CustomDot = props.navDotEl ? DotHOC(props.navDotEl) : null
  const SlideEl = Slide(props.slideEl)

  return (
    <div className="another-slider__wrapper">
      <div ref={sliderRef} className="another-slider__slides">
        {
          props.data.map((slide, index) => (
            <div
              key={index}
              className={cn(
                'another-slider__slide',
                index === activeSlideIdx && 'active'
              )}
            >
              <SlideEl data={slide} />
            </div>
          ))
        }
      </div>
      {
        !props.hideNavigation && (
          <>
            <div onClick={() => changeSlide(false)} className="another-slider__nav-wrap_prev another-slider__nav-wrap">
              <PrevArrow />
            </div>
            <div ref={nextBtnRef} onClick={() => changeSlide(true)} className="another-slider__nav-wrap_next another-slider__nav-wrap">
              <NextArrow />
            </div>
          </>
        )
      }
      {
        !props.hideDots && 
        <Dots 
          dot={props.navDotEl || null} 
          slidesNum={totalSlides} 
          activeSlideIdx={activeSlideIdx} 
        />
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