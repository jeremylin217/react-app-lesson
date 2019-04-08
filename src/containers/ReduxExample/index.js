import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import Counter from '@/components/Counter'
import * as appActions from '@/actions/app'

const mapStateToProps = state => ({
  count: state.app.count,
})

const mapDispatchToProps = dispatch => ({
  appActions: bindActionCreators(appActions, dispatch),
  // oneAction: (...args) => dispatch(oneAction(...args))
})

class ReduxExample extends Component {
  state = {
    color: '#000000',
  }

  colorChangeHandler = e => {
    this.setState({
      color:
        '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6),
    })
  }

  constructor(props) {
    super(props)
    console.log('constructor')
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    const { color } = this.state
    const { count, appActions } = this.props
    return (
      <div className="Page">
        <div className="container text-center">
          <h1>Redux Example</h1>
          <hr />
          <Counter count={count} textColor={color} />
          <button className="btn btn-primary" onClick={appActions.click}>
            Click Me
          </button>
          &nbsp;
          <button
            className="btn btn-secondary"
            onClick={this.colorChangeHandler}
          >
            Change Color
          </button>
          <hr />
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    )
  }
}

ReduxExample.propTypes = {
  count: PropTypes.number.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxExample)
