import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';
import App from './components/App';
import reducers from './reducers';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const store = createStore(reducers, {},  composeEnhancers(applyMiddleware(ReduxThunk)));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
