import appReducer, { initState as appState } from '@/reducers/app'
import { APP_CLICK } from '@/constants/actionTypes'

describe('appReducer', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('type: APP_CLICK', () => {
    it('"count" should +1', () => {
      const result = appReducer(appState, {
        type: APP_CLICK,
      })
      expect(result).toEqual({
        ...appState,
        count: 1,
      })
    })
  })
})
