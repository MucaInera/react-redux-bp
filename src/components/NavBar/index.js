import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import {} from '../../actions'

import { indexRoutes } from '../../routes/Config'

const styles = (theme) => ({
})

class NavBar extends React.Component {
  state = {}

  componentDidMount = () => {
    const { pathname } = this.props.location

    this.setState({
      value: pathname
    })
  }

  onChange = (event, value) => {
    this.setState({
      value
    })
  }

  render() {
    const { value } = this.state

    if (!value) {
      return null
    }

    return (
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={this.onChange}>
          {indexRoutes.filter(item => {
            return item.inNav ? true : false
          }).map((indexRoute, index) => {
            const { inNav, paths } = indexRoute

            return (
              <Tab key={index} value={paths[0]} component={Link} to={inNav.path} label={inNav.label} />
            )
          })}
        </Tabs>
      </AppBar>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(NavBar)))
