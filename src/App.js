import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';
import Food from "./components/Scapic/index";

import rootSaga from './sagas';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const sagaMiddleware = createSagaMiddleware()


const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware),
  
));


sagaMiddleware.run(rootSaga)







class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <Switch>
          <Route exact path="/" component={ Food } />
         
        </Switch>
        </Provider>
      </Router>
    );
  }
}

export default App;
