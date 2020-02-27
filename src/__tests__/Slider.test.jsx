import React from 'react'
import { shallow } from 'enzyme'
import Slider from '../components/slider'

const slides = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150'
  }
]

describe('Slider', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Slider data={slides} />);

        expect(wrapper).toBeTruthy();
    })
})