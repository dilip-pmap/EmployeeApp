  // Dependencies.
  import React from 'react';
  import ReactDOM from 'react-dom';
  import createBrowserHistory from 'history/lib/createBrowserHistory';
  import { Router, Route } from 'react-router';

  // Pages.
  import Homepage from './App';
  import Loginpage from './login';

  // Routes template.
  const template = (
  	<Router history={createBrowserHistory()}>
      <Route path="/homepage" component={Homepage} title="Home Page" />
      <Route path="/" component={Loginpage} title="Login Page" />
  	</Router>
  );


  // Insertion point.
  const el = document.getElementById('root');

  ReactDOM.render(template, el);
