import React from 'react'
import Slider from './slider'

const slides = [
  {
    id: 1,
    image: '1.png'
  },
  {
    id: 2,
    image: '2.png'
  },
  {
    id: 3,
    image: '3.png'
  }
]

export default () => {
  return <Slider data={slides} />
}
