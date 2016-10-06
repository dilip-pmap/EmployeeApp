import React, {Component} from 'react';
let ids=[];
let sorting= true;
class EmpList extends Component {
  constructor(props) {
      super(props);
      this.state = {
        Employees: [{"id":"1","firstname":"Dilip","lastname":"Gudivada","username":"dgudivada", "selected": false },
       {"id":"2","firstname":"Ramesh","lastname":"Kodam","username":"rkodam", "selected": false},
       {"id":"3","firstname":"Marcelo","lastname":"Paiva","username":"mpaiva", "selected": false},
       {"id":"4","firstname":"Alessandro","lastname":"Barroso","username":"abarroso", "selected": false},
       {"id":"5","firstname":"Michel","lastname":"Marrache","username":"mmarache", "selected": false}],
      };
    }
    handleChange(id){
      if(!ids[id-1]){
        ids.push({id});
      }
      else {
         ids.splice(id-1, 1);
      }
     console.log(ids);
      // ids.push({id});
      // console.log(ids);
    }
    handleDelete() {
      console.log(ids.length);
           if (ids.length) {
            //  let newState=[];
            //  ids.forEach( item => {
            //   newState =this.state.Employees.filter(employee => employee.id !== item.id);
            //   });
            // this.setState({Employees: newState});
            let newData = this.state.Employees.slice(); //copy array
             ids.forEach( item => {
              //  newData.splice((item.id-1), 1);
              newData =this.state.Employees.filter(employee => employee.id !== item.id);
             });
            //  remove element
            console.log(newData);
            this.setState({Employees: newData}); //update state
            ids=[];
          } else {
            alert('Please select atleast one row to delete the record');
          }
    }
    alphabetizeByKey(array = [], key) {
    array.sort((a, b) => {
      if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
        return a[key].localeCompare(b[key]);
      }
    });
    return array;
  }
  descalphabetizeByKey(array = [], key) {
  array.sort((a, b) => {
    if (a.hasOwnProperty(key) && b.hasOwnProperty(key)) {
      return b[key].localeCompare(a[key]);
    }
  });
  return array;
}
    handlesort(e){
      e.preventDefault();
      if(sorting){
      // console.log(this.alphabetizeByKey(this.state.Employees,"firstname"));
    this.setState(this.alphabetizeByKey(this.state.Employees,"firstname"));
  sorting = !sorting;
  } else {
        this.setState(this.descalphabetizeByKey(this.state.Employees,"firstname"));
        sorting = !sorting;
  }
        }
        // handledescsort(e){
        //   e.preventDefault();
        //   // console.log(this.alphabetizeByKey(this.state.Employees,"firstname"));
        // this.setState(this.descalphabetizeByKey(this.state.Employees,"firstname"));
        //     }
        //     <a onClick={this.handlesort.bind(this)}>Asc Sorting</a>&nbsp;&nbsp;
        //     <a onClick={this.handledescsort.bind(this)}>Desc Sorting</a>
  render() {
    return (
      <div className="container">
      <h5>Users Lists</h5><button className="btnprimary pull-right" onClick={this.handleDelete.bind(this)}>delete</button>
      <table className="tableBorder" width="800">
        <thead className="tableheader">
          <tr>
              <th>&nbsp;#&nbsp;</th>
            <th><a onClick={this.handlesort.bind(this)}>First Name</a></th>
            <th>&nbsp;Last Name&nbsp;</th>
            <th>&nbsp;User Name&nbsp;</th>
            </tr>
          </thead>
            <tbody>
        {this.state.Employees.map((employee,index) =><tr key={index}>
          <td className="tableBorder">
          <input type="checkbox" onChange={this.handleChange.bind(this,employee.id)} /></td>
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
