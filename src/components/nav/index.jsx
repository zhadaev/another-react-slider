import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import PrevArrow from './prev-arrow'
import NextArrow from './next-arrow'
import HOC from '../../shared/hoc'

const Nav = forwardRef(({changeSlide, navPrevEl, navNextEl}, ref) => {
  const nextBtnRef = useRef()
  const CustomNextBtn = navNextEl && HOC(navNextEl)
  const CustomPrevBtn = navPrevEl && HOC(navPrevEl)

  useImperativeHandle(ref, () => ({
    switchSlide() { nextBtnRef.current.click() }
  }))

  return (
    <>
      <div
        onClick={() => changeSlide(false)}
        className="another-slider__nav-wrap_prev another-slider__nav-wrap"
      >
        { navPrevEl ? <CustomPrevBtn /> : <PrevArrow /> }
      </div>
      <div
        ref={nextBtnRef}
        onClick={() => changeSlide(true)}
        className="another-slider__nav-wrap_next another-slider__nav-wrap"
      >
         { navNextEl ? <CustomNextBtn /> : <NextArrow /> }
      </div>
    </>
  )
  
})

Nav.propTypes = {
  changeSlide: PropTypes.func,
  navPrevEl: PropTypes.func, 
  navNextEl: PropTypes.func
}

export default Nav