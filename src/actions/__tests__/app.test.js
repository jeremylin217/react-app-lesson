import * as appActions from '@/actions/app'
describe('appAction', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  describe('type: APP_CLICK', () => {
    it('should apply the click', () => {
      expect(appActions.click()).toEqual({ type: 'APP_CLICK' })
    })
  })
})
