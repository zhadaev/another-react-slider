import React from 'react'
import PropTypes from 'prop-types'
import Dot from './dot'
import HOC from '../../shared/hoc'

const Dots = ({ dot, activeSlideIdx, slides }) => {
  const CustomDot = dot && HOC(dot)

  return (
    <div className='another-slider__dots'>
      {
        slides.map((_, index) => (
          <div className="another-slider__dot-wrap" key={index}>
            {
              // dot ? 
              // <CustomDot isActive={index === activeSlideIdx} /> :
              <Dot dot={dot} isActive={index === activeSlideIdx} />
            }
          </div>
        ))
      }
    </div>
  )
}

Dots.propTypes = {
  dot: PropTypes.func,
  activeSlideIndex: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
}

export default Dots