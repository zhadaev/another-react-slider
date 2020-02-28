import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.scss'
import HOC from '../../shared/hoc'

const Dot = ({isActive, dot }) => {
  const CustomDot = dot && HOC(dot)

  return (
    dot
    ? <CustomDot className={cn(isActive && 'active')} isActive={isActive} />
    : <div className={cn('another-slider__dot', isActive && 'active')} />
  )
} 
  

Dot.propTypes = {
  isActive: PropTypes.bool.isRequired,
  dot: PropTypes.func
}

export default Dot