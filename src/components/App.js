import React, {Component} from 'react'
import firebase from 'firebase'

import AddNewHabitCard from './AddNewHabitCard'
import Container from './Container'
import HabitCard from './HabitCard'
import Header from './Header'
import LandingPage from './LandingPage'
import WeekHeader from './WeekHeader'

export default class App extends Component {
  state = {
    user: null,
    isLoading: true,
    habits: [],
  }

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBOgEKr1r2dRTs9nGWTu99Xwf8yAuX4mAk',
      authDomain: 'habits-82cb3.firebaseapp.com',
      databaseURL: 'https://habits-82cb3.firebaseio.com',
      projectId: 'habits-82cb3',
      storageBucket: 'habits-82cb3.appspot.com',
      messagingSenderId: '179317366079',
    })
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({user, isLoading: false})
    })
  }

  handleGoogleSignInClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  handleSignOutClick = () => {
    firebase.auth().signOut()
  }

  render() {
    if (this.state.isLoading) {
      return null
    }
    if (this.state.user) {
      return (
        <Container>
          <Header
            name={this.state.user.displayName}
            onSignOutClick={this.handleSignOutClick}
          />
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
