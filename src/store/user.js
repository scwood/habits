import firebase from 'firebase'

import {fetchHabits} from './habits'

const SIGN_OUT = 'SIGN_OUT'
const SET_USER_INFO = 'SET_USER_INFO'

const initialState = {
  id: null,
  displayName: null,
  isFetching: true,
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        isFetching: false,
        id: action.user.uid,
        displayName: action.user.displayName,
      }
    case SIGN_OUT:
      return {
        isFetching: false,
        id: null,
        displayName: null,
      }
    default:
      return state
  }
}

export const isFetchingUser = (state) => state.user.isFetching
export const isAuthenticated = (state) => state.user.id !== null
export const getUserDisplayName = (state) => state.user.displayName
export const getUserId = (state) => state.user.id

export const listenForAuthChanges = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      dispatch({type: SIGN_OUT})
    } else {
      dispatch(setUserInfo(user))
      dispatch(fetchHabits())
    }
  })
}

export const signIn = () => () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

export const signOut = () => () => {
  firebase.auth().signOut()
}

const setUserInfo = (user) => {
  return {type: SET_USER_INFO, user}
}

export default user
