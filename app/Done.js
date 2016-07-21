import React, {Component} from 'react';
import {render} from 'react-dom';
class Done extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Done:[{"id":1,"data":"learn the basics of react"}],
      };
    }
    handleDelete(item,index) {
      console.log(item);
      let newData = this.state.Done.slice(); //copy array
       this.state.Done.forEach( item => {
         newData.splice(Number(index), 1);
       });
       //remove element
      console.log(newData);
      this.setState({Done: newData}); //update state
    }
    handleAdd(){
      if(!this.refs.done.value){
        alert("Please enter Done Task");
        return false;
      } else {
        this.state.Done.push({
          "data": this.refs.done.value,
        });
        this.setState(this.state);
      }
    }
  render() {
    return (
      <table width="400">
      <thead>
      <tr>
        <th>Done</th>
        </tr>
        </thead>
        <tbody>
        {this.state.Done.map((item,index) =><tr key={index}>
        <td>
        <div>
        <label>{item.data}</label><a onClick={this.handleDelete.bind(this,item,index)}>&nbsp;&nbsp;<font color="red">X</font></a>
        </div>
        </td>
        </tr>)}
        <tr>
        <td>
        <input type="text" ref="done" /> &nbsp;
        <button className="btnprimary" onClick={this.handleAdd.bind(this)}>Add</button>
        </td>
        </tr>
        </tbody>
        </table>
    );
  }
}
export default Done;
