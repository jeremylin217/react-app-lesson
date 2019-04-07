import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import { store, history } from './store'
import './index.css'

import App from '@/containers/App'
import Welcome from '@/containers/Welcome'
import StyleExample from '@/containers/StyleExample'
import ReduxExample from '@/containers/ReduxExample'
import NotFound from '@/containers/NotFound'

// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/welcome" render={() => <Welcome />} />
        <Route exact path="/example/style" render={() => <StyleExample />} />
        <Route exact path="/example/redux" render={() => <ReduxExample />} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
