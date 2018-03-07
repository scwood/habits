import {firestore} from 'firebase'

import {getUserId} from './user'

const SET_HABITS = 'SET_HABITS'
const TOGGLE_DAY = 'TOGGLE_DAY'

const habits = (state = [], action) => {
  switch (action.type) {
    case SET_HABITS:
      return action.habits
    case TOGGLE_DAY:
      return state.map((habit) => {
        if (habit.id === action.id) {
          const result = {...habit, daysComplete: {...habit.daysComplete}}
          if (habit.daysComplete[action.date]) {
            delete result.daysComplete[action.date]
          } else {
            result.daysComplete[action.date] = true
          }
          return result
        } else {
          return habit
        }
      })
    default:
      return state
  }
}

export const getHabits = (state) => state.habits

export const getHabitById = (state, id) => {
  for (const habit of state.habits) {
    if (habit.id === id) {
      return habit
    }
  }
}

export const fetchHabits = () => (dispatch, getState) => {
  const userId = getUserId(getState())
  firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .get()
    .then((querySnapshot) => {
      const habits = querySnapshot.docs.map((doc) => {
        return {id: doc.id, ...doc.data()}
      })
      dispatch({type: SET_HABITS, habits})
    })
}

export const createHabit = (habit) => (dispatch, getState) => {
  const userId = getUserId(getState())
  firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .add(habit)
    .then(dispatch(fetchHabits()))
}

export const deleteHabit = (id) => (dispatch, getState) => {
  const userId = getUserId(getState())
  firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .doc(id)
    .delete()
    .then(dispatch(fetchHabits()))
}

export const toggleDay = (id, date) => (dispatch) => {
  dispatch({type: TOGGLE_DAY, id, date})
}

export default habits
