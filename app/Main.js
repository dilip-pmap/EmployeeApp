import React, {Component} from 'react';
import {render} from 'react-dom';
import ToDo from './ToDo';
import Done from './Done';
import Chart from './Chart';
class Main extends Component {
  render() {
    return (
      <div className="container">
        <div style={{textAlign: 'right'}}>
        <strong>Dilip Gudivada</strong>  <br/>
          Software Engineer: Full Stack Developer
          <br/>
          My Github Account:  <a href="javascript:window.open('https://github.com/dilip-pmap')">Click here !!!</a>
        </div>
        <h2 style={{textAlign: 'left'}}>This Site is build with react, react-dom, react-redux, webpack, highcharts and node js</h2>
          <hr/>
          <Chart/>
          <hr/>
          <div className="row">
            <div className="col-sm-12">
              <u><strong>Example Sample Pages</strong></u><br/>
              Form and Grid Example With React <a href="/Homepage">Click here !!!</a><br/>
              Login Page <a href="/Login">Click here !!!</a><br/>
              Employee Form <a href="/Form">Click here !!!</a><br/>
              Employee List <a href="/List">Click here !!!</a><br/>
            </div>
          </div>
          <br/>
          <u><strong>To Do App</strong></u><br/>
          <div className="table-responsive">
      <table className=" table table-bordered table-striped">
      <thead className="tableheader">
        <tr>
            <th colSpan="2">To Do App</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td className="tableBorder"><h1>ToDO</h1><br/><ToDo/></td>
        <td className="tableBorder"><h1>Done</h1><br/><Done/></td>
        </tr>
    </tbody>
      </table>
      </div>

      </div>
    );
  }
}
export default Main;
