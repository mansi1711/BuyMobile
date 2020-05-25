import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import cartReducer from './reducers/CartReducer';
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";
import LoginProvider from './Components/LoginProvider';
const store = createStore(cartReducer, applyMiddleware(thunk), composeWithDevTools());
console.log("store.getState()", store.getState());
store.subscribe(() => console.log("store", store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <LoginProvider>
  <Router>
   <div className="App">
     <Navbar />
     <Routes />
     <Footer />
   </div>
  </Router>
  </LoginProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
