import { APP_CLICK } from '@/constants/actionTypes'

export default store => next => action => {
  if (action.type !== APP_CLICK) return next(action)

  const { user, app } = store.getState()
  console.log('user first name: ', user.firstName)
  console.log('count: ', app.count)

  return next(action)
}
