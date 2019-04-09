import React from 'react'
import toJson from 'enzyme-to-json'
import { render } from 'enzyme'
import App from '@/containers/App'
import { MemoryRouter } from 'react-router'

describe('<App />', () => {
  const wrapper = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should include a link to /welcome', () => {
    const link = wrapper.find('.btn.btn-primary').first()
    expect(link.text()).toEqual('Welcome')
    expect(link.prop('href')).toEqual('/welcome')
  })
})
