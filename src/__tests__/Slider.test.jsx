import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Slider from '../components/slider'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const slides = [
  {
    id: 1,
    text: 'Jest testing',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    text: 'React testing',
    image: 'https://via.placeholder.com/200'
  }
]

const Slide = (props) => <div className='slide-item'>{props.text}</div>

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

  xit('renders proper data', () => {
    expect(wrapper.first('.slide-item').text()).toEqual(slides.shift().text)
  })
})

describe('Slider component navigation', () => {
  it('doesn\'t render dot navigation', () => {
    const wrapper = mount(<Slider data={slides} slideEl={Slide} hideDots/>)
    expect(wrapper.exists('.another-slider__dots')).toBeFalsy()
  })

  it('doesn\'t render prev/next arrows', () => {
    const wrapper = mount(<Slider data={slides} slideEl={Slide} hideNavigation />)
    expect(wrapper.exists('.another-slider__nav-wrap')).toBeFalsy()
  })
})