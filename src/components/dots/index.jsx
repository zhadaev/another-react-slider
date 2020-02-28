import React from 'react'
import PropTypes from 'prop-types'
import Dot from './dot'

const Dots = ({ dot, activeSlideIdx, slides, setActiveSlideIdx }) => {
  return (
    <div className='another-slider__dots'>
      {
        slides.map((_, index) => (
          <div onClick={() => setActiveSlideIdx(index)} className="another-slider__dot-wrap" key={index}>
            <Dot dot={dot} isActive={index === activeSlideIdx} />
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
  setActiveSlideIdx: PropTypes.func
}

export default Dots