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
  apiKey: 'AIzaSyBOgEKr1r2dRTs9nGWTu99Xwf8yAuX4mAk',
  authDomain: 'habits-82cb3.firebaseapp.com',
  databaseURL: 'https://habits-82cb3.firebaseio.com',
  projectId: 'habits-82cb3',
  storageBucket: 'habits-82cb3.appspot.com',
  messagingSenderId: '179317366079',
})

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
)
