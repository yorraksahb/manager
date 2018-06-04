import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers'; 
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {

  componentWillMount() {

  const config = {
    apiKey: 'AIzaSyA-o0II8W4YWCKSxxZjN_wWr9ctXj5wkLU',
    authDomain: 'manager-5d197.firebaseapp.com',
    databaseURL: 'https://manager-5d197.firebaseio.com',
    projectId: 'manager-5d197',
    storageBucket: 'manager-5d197.appspot.com',
    messagingSenderId: '230905514705'
  };
  firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  };
}

export default App;