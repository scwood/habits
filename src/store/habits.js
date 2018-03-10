import {firestore} from 'firebase'

import {getUserId} from './user'

const SET_HABITS = 'SET_HABITS'
const CREATE_HABIT = 'CREATE_HABIT'
const UPDATE_HABIT = 'UPDATE_HABIT'
const DELETE_HABIT = 'DELETE_HABIT'

const habits = (state = [], action) => {
  switch (action.type) {
    case SET_HABITS:
      return action.habits
    case CREATE_HABIT:
      return [...state, action.habit]
    case UPDATE_HABIT:
      return state.map((habit) => {
        if (habit.id === action.id) {
          return {
            id: action.id,
            ...action.habit,
            daysComplete: {...action.habit.daysComplete},
          }
        }
        return habit
      })
    case DELETE_HABIT:
      return state.filter((habit) => habit.id !== action.id)
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
  const newHabit = {
    createdAt: new Date(),
    daysComplete: {},
    ...habit,
  }
  const userId = getUserId(getState())
  const newHabitRef = firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .doc()
  newHabit.id = newHabitRef.id
  dispatch({type: CREATE_HABIT, habit: newHabit})
  newHabitRef.set(newHabit)
}

export const updateHabit = (id, habit) => (dispatch, getState) => {
  dispatch({type: UPDATE_HABIT, id, habit})
  const userId = getUserId(getState())
  firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .doc(habit.id)
    .set(habit)
}

export const deleteHabit = (id) => (dispatch, getState) => {
  dispatch({type: DELETE_HABIT, id})
  const userId = getUserId(getState())
  firestore()
    .collection('users')
    .doc(userId)
    .collection('habits')
    .doc(id)
    .delete()
    .then(dispatch(fetchHabits()))
}

export const toggleDay = (id, date) => (dispatch, getState) => {
  const habit = getHabitById(getState(), id)
  if (habit.daysComplete[date]) {
    delete habit.daysComplete[date]
  } else {
    habit.daysComplete[date] = true
  }
  dispatch(updateHabit(id, habit))
}

export default habits
