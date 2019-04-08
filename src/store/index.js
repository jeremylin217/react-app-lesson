import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import nothing from '@/middlewares/nothing'
import rootEpic from '@/epics'
import createRootReducer from '@/reducers'

export const history = createBrowserHistory()

const initialState = {}
const appRouterMiddleware = routerMiddleware(history)
const epicMiddleware = createEpicMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancers =
  process.env.NODE_ENV === 'development'
    ? [appRouterMiddleware, epicMiddleware, logger, nothing]
    : [appRouterMiddleware, epicMiddleware]

export const configureStore = () => {
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancer(applyMiddleware(...enhancers))
  )

  epicMiddleware.run(rootEpic)

  return store
}
