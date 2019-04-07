import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Typography, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import { StyledPaper } from './elements'

class Welcome extends Component {
  render() {
    const { classes, user } = this.props

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              gutterBottom
              color="primary"
              className={classes.welcome}
            >
              Welcome, {user.firstName}!
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>xs=12 sm=6</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <StyledPaper className={classes.paper}>xs=6 sm=3</StyledPaper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
}

function mapStateToProps(state) {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Welcome))
