import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Routes from '../../routes'
import NavBar from '../../components/NavBar'

import {} from '../../actions'

const themeConfig = {}

const styles = theme => ({})

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme(themeConfig)

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <NavBar />
        <Routes />
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App)))
