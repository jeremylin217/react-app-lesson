import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '@/actions/user'
import { createLoadingSelector } from '@/reducers/loading'
import { createErrorMessageSelector } from '@/reducers/error'
import Loading from '@/components/Loading'
import Error from '@/components/Error'

const mapStateToProps = state => ({
  user: state.user,
  isFetching: createLoadingSelector(['GET_USER'])(state),
  error: createErrorMessageSelector(['GET_USER'])(state),
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch),
})

class User extends Component {
  componentDidMount() {
    const { match, userActions } = this.props
    userActions.getUserRequest({ id: match.params.id })
  }

  render() {
    const { user, isFetching, error } = this.props
    if (error) return <Error error={error} />
    if (isFetching) return <Loading />
    return (
      <div className="container">
        <h1>User</h1>
        <ul>
          <li>
            <strong>id:</strong> {user.id}
          </li>
          <li>
            <strong>username:</strong> {user.username}
          </li>
          <li>
            <strong>name:</strong> {user.name}
          </li>
          <li>
            <strong>email:</strong> {user.email}
          </li>
        </ul>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
