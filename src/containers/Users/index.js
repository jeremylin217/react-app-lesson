import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as usersActions from '@/actions/users'
import { createLoadingSelector } from '@/reducers/loading'
import { createErrorMessageSelector } from '@/reducers/error'
import Loading from '@/components/Loading'
import Error from '@/components/Error'

const mapStateToProps = state => ({
  users: state.users,
  isFetching: createLoadingSelector(['GET_USERS'])(state),
  error: createErrorMessageSelector(['GET_USERS'])(state),
})

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch),
})

class Users extends Component {
  componentDidMount() {
    this.props.usersActions.getUsersRequest()
  }

  render() {
    const { users, isFetching, error } = this.props
    if (error) return <Error error={error} />
    if (isFetching) return <Loading />
    return (
      <div className="container">
        <h1>Users</h1>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>username</th>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={`user-${i}`}>
                <td>{user.id}</td>
                <td>
                  <Link to={`/users/${user.id}`}>{user.username}</Link>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
