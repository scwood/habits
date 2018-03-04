import 'tachyons/css/tachyons.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import faLongArrowAltLeft from '@fortawesome/fontawesome-free-solid/faLongArrowAltLeft'
import firebase from 'firebase'
import fontawesome from '@fortawesome/fontawesome'
import {Provider} from 'react-redux'

import './index.css'
import AppContainer from './components/AppContainer'
import {configureStore} from './store'

fontawesome.library.add(faPlus)
fontawesome.library.add(faLongArrowAltLeft)

firebase.initializeApp({
  apiKey: 'AIzaSyC44pTo_9e6yFb8CNuURP5fqfXY7g6YN5E',
  authDomain: 'habit-tracker-44ad4.firebaseapp.com',
  databaseURL: 'https://habit-tracker-44ad4.firebaseio.com',
  projectId: 'habit-tracker-44ad4',
  storageBucket: '',
  messagingSenderId: '551332714977',
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
)
