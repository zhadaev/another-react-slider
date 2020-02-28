import React from 'react'
import Enzyme, { shallow, mount } from 'enzyme'
import Dot from '../components/dots/dot'
import Adapter from 'enzyme-adapter-react-16'
import { slides } from './mocks'

Enzyme.configure({ adapter: new Adapter() })

describe('Dot component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <Dot
        isActive={true}
      />
    )
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy()
  })

  it('renders dot with active class', () => {
    expect(wrapper.children().hasClass('active')).toBeTruthy()
  })

  it('renders dot without active class', () => {
    wrapper.setProps({ isActive: false })
    expect(wrapper.children().hasClass('active')).toBeFalsy()
  })
})