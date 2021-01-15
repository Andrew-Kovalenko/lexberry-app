import React from 'react';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import { render } from '@testing-library/react';
import './index.css';
import App from './App';
import {rootReducer} from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import {mySaga} from './redux/sagas'
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
    )
  )
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

sagaMiddleware.run(mySaga)

render(app, document.getElementById('root'))
