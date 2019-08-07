import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { Route, Switch, withRouter } from 'react-router-dom'

import {} from '../actions'

import { indexRoutes } from './Config'

// Routers
import Notfound from '../containers/Notfound'

const styles = theme => ({})

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {indexRoutes.map((route, routeIndex) => {
          return route.paths.map((path, pathIndex) => {
            const TmpComponent = route.component

            return (
              <Route exact path={path} key={routeIndex + '-' + pathIndex} render={() => <TmpComponent {...route.props} />} />
            )
          })
        })}
        <Route component={Notfound} />
      </Switch>
    )
  }
}

const mapStateToProps = state => ({ ...state.appReducer })

const mapDispatchToProps = dispatch => ({})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Routes)))
