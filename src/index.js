import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore
} from 'redux';
import { logger } from './middlewares';
import thunk from 'redux-thunk';
import './index.css';
import rootReducer from './reducers/rootReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEndhancers = composeAlt(
  applyMiddleware(thunk, logger)
);

const store = createStore(
  rootReducer,
  composedEndhancers
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
