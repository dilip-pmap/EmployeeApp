import React, {Component} from 'react';
import {render} from 'react-dom';
class ToDo extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ToDo:[{"data":"write react App"}],
      };
    }
    handleDelete(itemvalue,index) {
      console.log(itemvalue);
      let newState=this.state.ToDo.filter(item => item.data !== itemvalue.data);
      this.setState({ToDo: newState});
    }
    handleAdd(){
      if(!this.refs.todo.value){
        alert("Please enter ToDo Task");
        return false;
      } else {
        console.log(this.state.ToDo.filter(item => item.data === this.refs.todo.value));
        if(this.state.ToDo.filter(item => item.data === this.refs.todo.value).length) {
          alert("already Exists in your ToDO Task");
        }
        else {
        this.state.ToDo.push({
          "data": this.refs.todo.value,
        });
        this.setState(this.state);
        this.refs.todo.value="";
      }
    }
  }
  render() {
    return (
    <table width="400">
      <tbody>
        {this.state.ToDo.map((item,index) =><tr key={index}>
        <td>
        <div>
        <label>{item.data}</label><a onClick={this.handleDelete.bind(this,item,index)}>&nbsp;&nbsp;<font color="red">X</font></a>
        </div>
        </td>
        </tr>)}
        <tr>
      <td>
      <input type="text" ref="todo"/> &nbsp;
      <button className="btn btn-success" onClick={this.handleAdd.bind(this)}>Add</button>
      </td>
      </tr>
      </tbody>
      </table>
    );
  }
}
export default ToDo;
