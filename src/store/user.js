import firebase from 'firebase'

export const SIGN_OUT = 'SIGN_OUT'
const SET_USER_INFO = 'SET_USER_INFO'

const initialState = {
  userId: null,
  displayName: null,
  isFetching: true,
}

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        isFetching: false,
        userId: action.user.uid,
        displayName: action.user.displayName,
      }
    case SIGN_OUT:
      return {
        isFetching: false,
        userId: null,
        displayName: null,
      }
    default:
      return state
  }
}

export const isFetchingUser = (state) => state.user.isFetching
export const isAuthenticated = (state) => state.user.userId !== null
export const getUserDisplayName = (state) => state.user.displayName

export const listenForAuthChanges = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user === null) {
      dispatch({type: SIGN_OUT})
    } else {
      dispatch(setUserInfo(user))
    }
  })
}

export const signOut = () => () => {
  firebase.auth().signOut()
}

export const signIn = () => () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithRedirect(provider)
}

const setUserInfo = (user) => {
  return {type: SET_USER_INFO, user}
}
