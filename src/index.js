import React from 'react';
// import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import { render } from '@testing-library/react';
import './index.css';
import App from './App';
import {rootReducer} from './redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga'
import {mySaga} from './redux/sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer, compose(
    applyMiddleware(
      sagaMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

sagaMiddleware.run(mySaga)

render(app, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     app
//   </React.StrictMode>,
//   document.getElementById('root')
// );