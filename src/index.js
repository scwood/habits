import 'tachyons/css/tachyons.min.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'firebase/firestore';
import {Provider} from 'react-redux';

import './index.css';
import App from './components/App';
import {configureStore} from './store';

firebase.initializeApp({
  apiKey: 'AIzaSyC44pTo_9e6yFb8CNuURP5fqfXY7g6YN5E',
  authDomain: 'habit-tracker-44ad4.firebaseapp.com',
  databaseURL: 'https://habit-tracker-44ad4.firebaseio.com',
  projectId: 'habit-tracker-44ad4',
  storageBucket: '',
  messagingSenderId: '551332714977',
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
