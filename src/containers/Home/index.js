import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import {} from '../../actions'

const styles = (theme) => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 15),
  }
})

class Home extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">Hello World</Typography>
      </Paper>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Home)))
