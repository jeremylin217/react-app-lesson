import { createAction } from 'redux-actions'
import { APP_CLICK } from '@/constants/actionTypes'

export const click = createAction(APP_CLICK)
// function click(payload) {
//   return {
//     type: APP_CLICK,
//     payload
//   }
// }
