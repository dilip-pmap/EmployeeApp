import React, {Component} from 'react';
import {render} from 'react-dom';
import ToDo from './ToDo';
import Done from './Done';
import Chart from './Chart';
class Main extends Component {
  render() {
    return (
      <div className="container">
        <h2 style={{textAlign: 'left'}}>This Site is build with react, react-dom, react-redux, webpack, highcharts and node js</h2>
          <div style={{textAlign: 'right'}}>
          <strong>Dilip Gudivada</strong>  <hr/>
            Software Engineer: Full Stack Developer
            <br/>
            My Github Account:  <a href="javascript:window.open('https://github.com/dilip-pmap')">Click here !!!</a>
          </div>
          <hr/>
          <Chart/>
          <hr/>
            Form and Grid Example With React <a href="/Homepage" style={{color: 'blue'}}>Click here !!!</a>
          <div className="table-responsive">
      <table className=" table tableBorder">
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
