import React, {Component} from 'react'
import firebase from 'firebase'

import AddNewHabitCard from './AddNewHabitCard'
import Container from './Container'
import HabitCard from './HabitCard'
import Header from './Header'
import WeekHeader from './WeekHeader'
import LandingPage from './LandingPage'

export default class App extends Component {
  state = {
    isAuthenticated: false,
    isLoading: true,
  }

  componentDidMount() {
    firebase
      .auth()
      .getRedirectResult()
      .then((result) => {
        console.log(result)
      })
  }

  handleGoogleSignInClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    this.setState({isLoading: true})
    firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => firebase.auth().signInWithRedirect(provider))
  }

  render() {
    if (this.state.isLoading) {
      return <div>Is loading</div>
    }
    if (this.state.isAuthenticated) {
      return (
        <Container>
          <Header>Habits</Header>
          <AddNewHabitCard />
          <WeekHeader />
          {this.state.habits.map((habit) => (
            <HabitCard key={habit.id} habit={habit} />
          ))}
        </Container>
      )
    }
    return <LandingPage onGoogleSignInClick={this.handleGoogleSignInClick} />
  }
}
