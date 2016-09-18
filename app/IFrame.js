import React, {Component} from 'react';
import {render} from 'react-dom';
import Iframe from 'react-iframe';
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
  render() {
    return (
      <div className="container">
      <table>
      <tr>
      <td><a onClick={this.handleList.bind(this)}>List Page</a> <br/> <br/><a onClick={this.handleToDo.bind(this)}>To Do Page</a> <br/> <br/></td>
      <td><Iframe url={this.state.frameurl}/></td>
      </tr>
      </table>
      </div>
    );
  }
}
export default IFrame;
