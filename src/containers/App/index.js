import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '@/static/images/logo.svg'
import './style.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="mb-2">
            <Link className="btn btn-primary mr-1" to="/welcome">
              Welcome
            </Link>
            <Link className="btn btn-secondary mr-1" to="/example/redux">
              Counter Example
            </Link>
            <Link className="btn btn-secondary mr-1" to="/example/style">
              Styles Example
            </Link>
            <Link className="btn btn-secondary mr-1" to="/users">
              API Call Example
            </Link>
          </div>
          <p>
            Edit <code>src/containers/App/index.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
