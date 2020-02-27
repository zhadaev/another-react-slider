import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import './index.scss'

const Dot = ({isActive }) =>  <div className={cn('another-slider__dot', isActive && 'active')} />

Dot.propTypes = {
  isActive: PropTypes.bool
}

export default Dot

export const DotHOC = CustomDot => {
  return () => <CustomDot {...props} />
} 

export const FlatDot = (props) => 
  <div className={cn('another-slider__dot_flat', props.isActive && 'active')} />