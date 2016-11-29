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
  import ToDoPage from './Main';
  import IFramePage from './IFrame';
  import TestPage from './Test';
  // Routes template.
  const template = (
  	<Router history={browserHistory}>
      <Route path="/homepage" component={Homepage} title="Home Page" />
      <Route path="/Login" component={Loginpage} title="Login Page" />
      <Route path="/Form" component={Formpage} title="Form Page" />
      <Route path="/List" component={Listpage} title="list Page" />
      <Route path="/ToDoApp" component={ToDoPage} title="ToDo App Page" />
      <Route path="/IFrame" component={IFramePage} title="IFrame Page" />
      <Route path="/" component={TestPage} title="Test Page"/>
  	</Router>
  );


  // Insertion point.
  const el = document.getElementById('root');

  ReactDOM.render(template, el);
