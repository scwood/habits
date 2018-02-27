import 'tachyons/css/tachyons.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import firebase from 'firebase'
import fontawesome from '@fortawesome/fontawesome'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

fontawesome.library.add(faPlus)

firebase.initializeApp({
  apiKey: 'AIzaSyBOgEKr1r2dRTs9nGWTu99Xwf8yAuX4mAk',
  authDomain: 'habits-82cb3.firebaseapp.com',
  databaseURL: 'https://habits-82cb3.firebaseio.com',
  projectId: 'habits-82cb3',
  storageBucket: 'habits-82cb3.appspot.com',
  messagingSenderId: '179317366079',
})

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
