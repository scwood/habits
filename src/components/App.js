import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import Layout from './Layout'
import HeaderContainer from './HeaderContainer'
import LandingPageContainer from './LandingPageContainer'
import HabitFormContainer from './HabitFormContainer'
import AllHabitsContainer from './AllHabitsContainer'

export default class App extends Component {
  static propTypes = {
    listenForAuthChanges: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    isFetchingUser: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.listenForAuthChanges()
  }

  render() {
    if (this.props.isFetchingUser) {
      return null
    }
    if (this.props.isAuthenticated) {
      return (
        <BrowserRouter>
          <Layout>
            <HeaderContainer />
            <Switch>
              <Route exact path="/" component={AllHabitsContainer} />
              <Route exact path="/habits/new" component={HabitFormContainer} />
              <Route exact path="/habits/:id" component={HabitFormContainer} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      )
    }
    return <LandingPageContainer />
  }
}
