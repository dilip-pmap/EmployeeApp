 import React, {Component} from 'react';
import {render} from 'react-dom';
import ToDo from './ToDo';
import Done from './Done';
import Highchart from './Chart';
import Homepage from './App';
import Loginpage from './login';
import Formpage from './Form';
import Listpage from './EmpList';
import ToDoPage from './Main';
import TestPage from './Test';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state={
      screenName: 'chart',
    };
    this.handleShowChart = this.handleShowChart.bind(this);
     this.handleEmployeeList = this.handleEmployeeList.bind(this);
     this.handleLoginPage = this.handleLoginPage.bind(this);
  }

  handleShowChart() {
    this.setState({screenName: 'chart'});
  }

  handleEmployeeList() {
    this.setState({screenName:'employee'});
  }

  handleLoginPage() {
    this.setState({screenName: 'login'});
  }
  render() {
    let screenToShow = null;
    switch(this.state.screenName) {
      case 'chart':
        screenToShow= <Highchart />;
        break;
      case 'employee':
      screenToShow = <Homepage />;
      break;
      case 'login':
      screenToShow = <Loginpage />;
      default:
      screenToShow= <Highchart />;
        };
    return (
      <div className="container-fluid">
        <div className="row content">
          <div className="col-sm-3 sidenav">
          <strong>Dilip Gudivada</strong>  <br/>
          <small>Software Engineer: Full Stack Developer</small>
       <br/>
       <small>My Github Account:  <a href="javascript:window.open('https://github.com/dilip-pmap')">Click here !!!</a></small>
       <br/>
     <small style={{textAlign: 'left'}}>This Site is build with react, react-dom, react-redux, webpack, highcharts and node js</small>
       <hr/>
            <ul className="nav nav-pills nav-stacked">
              <li className="active" style={{ borderBottom:'1px solid white'}} >
              <button className="block" style={{ width: '100%'}} onClick={this.handleShowChart}>
                Chart
              </button>
              </li>
              <li className="active" style={{ borderBottom:'1px solid white'}}>
              <button className="block" style={{ width: '100%'}} onClick={this.handleEmployeeList}>
              Employee List
              </button>
              </li>
              <li className="active" style={{ borderBottom:'1px solid white'}}>
              <button className="block" style={{ width: '100%'}} onClick={this.handleLoginPage}>
              Sample Login Page
              </button>
              </li>
            </ul>
          </div>
          <div className="col-sm-9">
          {screenToShow}
            </div>
          </div>
        </div>
    );
  }
}
export default Main;
