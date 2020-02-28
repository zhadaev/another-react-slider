import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Slider from '../components/slider'
import Adapter from 'enzyme-adapter-react-16'
import { slides } from './mocks'

Enzyme.configure({ adapter: new Adapter() })

const Slide = ({ data: { text }}) =><div className='slide-item'>{text}</div>

describe('Slider component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Slider data={slides} slideEl={Slide} />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders proper number of slides', () => {
    expect(wrapper.find('.slide-item')).toHaveLength(slides.length)
  })

  it('renders proper data', () => {
    expect(wrapper.find('.slide-item').first().text()).toEqual(slides.shift().text)
  })

  it('doesn\'t render dot navigation', () => {
    wrapper.setProps({ hideDots: true })
    expect(wrapper.exists('.another-slider__dots')).toBeFalsy()
  })

  it('doesn\'t render prev/next arrows', () => {
    wrapper.setProps({ hideNavigation: true })
    expect(wrapper.exists('.another-slider__nav-wrap')).toBeFalsy()
  })
})