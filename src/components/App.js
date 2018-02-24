import React, {Component} from 'react'

import Container from './Container'
import Header from './Header'
import WeekHeader from './WeekHeader'
import HabitCard from './HabitCard'
import AddNewHabitCard from './AddNewHabitCard'

class App extends Component{

  state = {
    habits: [
      {name: 'No phone in the morning'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
      {name: 'Wake up early'},
    ]
  }

  render() {
    return (
      <Container>
        <Header>Habits</Header>
        <AddNewHabitCard />
        <WeekHeader />
        {this.state.habits.map(habit => <HabitCard habit={habit} />)}
      </Container>
    )
  }
}

export default App
