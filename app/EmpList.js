import React, {Component} from 'react';
import {render} from 'react-dom';
let ids=[];
class EmpList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Employees: [{"id":"1","firstname":"Dilip","lastname":"Gudivada","username":"dgudivada"},
       {"id":"2","firstname":"Ramesh","lastname":"Kodam","username":"rkodam"},
       {"id":"3","firstname":"Marcelo","lastname":"Paiva","username":"mpaiva"},
       {"id":"4","firstname":"Alessandro","lastname":"Barroso","username":"abarroso"},
       {"id":"5","firstname":"Michel","lastname":"Marrache","username":"mmarache"}],
      };
    }
    handleChange(id){
      ids.push({id});
      console.log(ids);
    }
    handleDelete() {
      console.log(ids.length);
           if (ids.length) {
            let newData = this.state.Employees.slice(); //copy array
             ids.forEach( item => {
               newData.splice(Number(item.id-1), 1);
             });
             //remove element
            console.log(newData);
            this.setState({Employees: newData}); //update state
          } else {
            alert('Please select atleast one row to delete the record');
          }
    }
  render() {
    return (
      <div className="container">
      <h5>Users Lists</h5><button className="btnprimary" onClick={this.handleDelete.bind(this)}>delete</button>
      <table className="tableBorder">
        <thead className="tableheader">
          <tr>
              <th>&nbsp;#&nbsp;</th>
            <th>&nbsp;First Name&nbsp;</th>
            <th>&nbsp;Last Name&nbsp;</th>
            <th>&nbsp;User Name&nbsp;</th>
            </tr>
          </thead>
            <tbody>
        {this.state.Employees.map((employee,index) =><tr key={index}>
          <td className="tableBorder">
          <input type="checkbox" ref="complete" onChange={this.handleChange.bind(this,employee.id)}/></td>
            <td  className="tableBorder">{employee.firstname}</td>
            <td className="tableBorder">{employee.lastname}</td>
            <td className="tableBorder">{employee.username}</td>
              </tr>)}
        </tbody>
        </table>
      </div>
    );
  }
}
export default EmpList;
