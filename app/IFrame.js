import React, {Component} from 'react';
import {render} from 'react-dom';
class IFrame extends Component {
constructor(props) {
  super(props);
  this.state = {
    frameurl:'/',
  }
}

handleList() {
this.setState({frameurl: '/List'});
}

handleToDo() {
this.setState({frameurl: '/ToDoApp'});
}


handleRoute() {
  alert('hi');
}
  render() {
    return (
      <div className="container">
      <table>
      <tr>
      <td><a onClick={this.handleList.bind(this)}>List Page</a>
        <br/> <br/><a onClick={this.handleToDo.bind(this)}>To Do Page</a> <br/> <br/></td>
        <td><a onClick={this.handleRoute.bind(this)}>Route</a></td>
      </tr>
      </table>
      </div>
    );
  }
}
export default IFrame;
