import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Dot = ({isActive}) => <div className={cn('another-slider__dot', isActive && 'active')} />

Dot.propTypes = {
  isActive: PropTypes.bool
}

export default Dot