import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
// import { counter} from './index.redux';
import reducers from './reducer';
import './config';
import 'antd-mobile/dist/antd-mobile.css';
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// console.log(store.getState());
ReactDOM.render(
 
      (<Provider store={store}>
        <App/>
      </Provider>),
        document.getElementById('root')
);

 