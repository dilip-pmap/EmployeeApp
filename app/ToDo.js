import React, {Component} from 'react';
import {render} from 'react-dom';
class ToDo extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ToDo:[{"data":"write react App"}],
      };
    }
    handleDelete(item,index) {
      console.log(item);
      let newData = this.state.ToDo.slice(); //copy array
       this.state.ToDo.forEach( item => {
         newData.splice(Number(index), 1);
       });
       //remove element
      console.log(newData);
      this.setState({ToDo: newData}); //update state
    }
    handleAdd(){
      if(!this.refs.todo.value){
        alert("Please enter ToDo Task");
        return false;
      } else {
        this.state.ToDo.push({
          "data": this.refs.todo.value,
        });
        this.setState(this.state);
      }
    }
  render() {
    return (
    <table width="400">
    <thead>
    <tr>
      <th>Todo</th>
      </tr>
      </thead>
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
      <button className="btnprimary" onClick={this.handleAdd.bind(this)}>Add</button>
      </td>
      </tr>
      </tbody>
      </table>
    );
  }
}
export default ToDo;
