import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowerRouter, route, Switch } from 'react-router-dom';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Signup from './components/Signup';
import Signin from './components/Signin';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWtihMiddleware(reducers)}>
      <BrowserRouter>
        <Switch alias class Route T extends RouteProps ={RouteProps} >
          <HeaderWrapper>
            <Route path='/' component={Signin}/>
            <Route path='/' component={Signup}/>
          </HeaderWrapper>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('app-wrapper')
  );
  
}

document.addEventListener('DOMContentLoaded', main);