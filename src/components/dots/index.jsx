import React from 'react'
import PropTypes from 'prop-types'
import Dot, { DotHOC } from './dot'

const Dots = ({ dot, activeSlideIdx, slidesNum }) => {
  const CustomDot = dot ? DotHOC(dot) : null

  return (
    <div className='another-slider__dots'>
      {
        Array.from({ length: slidesNum }).map((_, index) => (
          <div className="another-slider__dot-wrap" key={index}>
            {
              dot ? 
              <CustomDot isActive={index === activeSlideIdx} /> :
              <Dot isActive={index === activeSlideIdx} />
            }
          </div>
        ))
      }
    </div>
  )
}

Dots.propTypes = {
  dot: PropTypes.func,
  activeSlideIndex: PropTypes.number
}

export default Dots