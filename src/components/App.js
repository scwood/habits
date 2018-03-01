import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'

import AddNewHabitCard from './AddNewHabitCard'
import Layout from './Layout'
import HabitCard from './HabitCard'
import HeaderContainer from './HeaderContainer'
import LandingPageContainer from './LandingPageContainer'
import WeekHeader from './WeekHeader'

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
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <AddNewHabitCard />
                    <WeekHeader />
                    {[].map((habit) => (
                      <HabitCard key={habit.id} habit={habit} />
                    ))}
                  </div>
                )}
              />
              <Route path="/habits/new" />
              <Route path="/habits/:id" render={() => 'hi'} />
              <Redirect to="/" />
            </Switch>
          </Layout>
        </BrowserRouter>
      )
    }
    return <LandingPageContainer />
  }
}
