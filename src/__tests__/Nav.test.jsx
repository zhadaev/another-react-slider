import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Nav from '../components/nav'
import Adapter from 'enzyme-adapter-react-16'
import { slides } from './mocks'

Enzyme.configure({ adapter: new Adapter() })

describe('Nav component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<Nav />)
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders custom next nav element', () => {
    const CustomNext = () => <div className="custom">Next</div>
    wrapper.setProps({ navPrevEl: CustomNext })
    expect(wrapper.exists('.custom')).toBeTruthy()
  })
})