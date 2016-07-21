  // Dependencies.
  import React from 'react';
  import ReactDOM from 'react-dom';
  // import createBrowserHistory from 'history/lib/createBrowserHistory';
  import { Router, Route, browserHistory } from 'react-router';

  // Pages.
  import Homepage from './App';
  import Loginpage from './login';
  import Formpage from './Form';
  import Listpage from './EmpList';
  // Routes template.
  const template = (
  	<Router history={browserHistory}>
      <Route path="/homepage" component={Homepage} title="Home Page" />
      <Route path="/" component={Loginpage} title="Login Page" />
      <Route path="/Form" component={Formpage} title="Form Page" />
      <Route path="/List" component={Listpage} title="list Page" />
  	</Router>
  );


  // Insertion point.
  const el = document.getElementById('root');

  ReactDOM.render(template, el);
