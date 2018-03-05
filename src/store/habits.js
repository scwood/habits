import firebase from 'firebase'

import {getUserId} from './user'

const db = firebase.firestore

const SET_HABITS = 'SET_HABITS'

const habits = (state = [], action) => {
  switch (action.type) {
    case SET_HABITS:
      return action.habits
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
  db()
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
  db()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .add(habit)
    .then(dispatch(fetchHabits()))
}

export const deleteHabit = (id) => (dispatch, getState) => {
  console.log('before', id)
  const userId = getUserId(getState())
  console.log('after', id)
  db()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .doc(id)
    .delete()
    .then(dispatch(fetchHabits()))
}

export default habits
