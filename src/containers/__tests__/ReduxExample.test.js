import React from 'react'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import ReduxExample, {
  ReduxExample as ReduxExampleComponent,
} from '@/containers/ReduxExample'
import { MemoryRouter } from 'react-router'
import { initState as app } from '@/reducers/app'
import { Provider } from 'react-redux'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('<ReduxExample />', () => {
  let wrapper
  let onClick

  beforeEach(() => {
    onClick = jest.fn()
    wrapper = mount(
      <MemoryRouter>
        <ReduxExampleComponent count={0} appActions={{ click: onClick }} />
      </MemoryRouter>
    )
  })

  it('should render', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render "Click Me" button', () => {
    const clickMeButton = wrapper.find('button#clickMeButton').first()
    expect(clickMeButton).toBeDefined()
  })

  it('"Click Me" button click calls onClick', () => {
    const clickMeButton = wrapper.find('button#clickMeButton').first()
    // clickMeButton.simulate('click')
    clickMeButton.props().onClick()
    expect(onClick).toBeCalled()
  })
})

describe('<ReduxExample /> with redux store', () => {
  let wrapper

  beforeEach(() => {
    const initialState = { app }
    const store = mockStore(initialState)
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <ReduxExample />
        </MemoryRouter>
      </Provider>
    )
  })
})
