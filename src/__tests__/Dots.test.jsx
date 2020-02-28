import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Dots from '../components/dots'
import Adapter from 'enzyme-adapter-react-16'
import { slides } from './mocks'

Enzyme.configure({ adapter: new Adapter() })

describe('Dots component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Dots
        slides={slides}
        activeSlideIndex={1}
        setActiveSlideIdx={() => {}}
      />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders proper number of dots', () => {
    expect(wrapper.find('.another-slider__dot-wrap')).toHaveLength(slides.length)
  })
})  