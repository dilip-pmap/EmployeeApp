import React, {Component} from 'react';
import {render} from 'react-dom';
import ToDo from './ToDo';
import Done from './Done';
class Main extends Component {
  render() {
    return (
      <div className="container">
      <table className="tableBorder" width="800">
      <thead className="tableheader">
        <tr>
            <th colSpan="2">To Do App</th>
          </tr>
        </thead>
        <tbody>
        <tr>
        <td className="tableBorder"><ToDo/></td>
        <td className="tableBorder"><Done/></td>
        </tr>
    </tbody>
      </table>
      </div>
    );
  }
}
export default Main;
