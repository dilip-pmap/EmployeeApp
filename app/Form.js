import React, {Component} from 'react';
import {render} from 'react-dom';
class Form extends Component {
  constructor(props) {
      super(props);
      this.state = {
        firstname: "",
        lastname:"",
        email:"",
        gender:"",
        color:"",
        isemployeed:"",
        note:"",
      };
    }
    handleSubmit(e) {
      e.preventDefault();
      if(!this.refs.empfirstname.value){
        alert('Please enter firstname');
        return false;
      }
      if(!this.refs.emplastname.value){
        alert('Please enter lastname');
        return false;
      }
      // if(!this.refs.empemail.value){
      //   alert('Please enter email');
      //   return false;
      // }
      if(!this.refs.male.checked && !this.refs.female.checked){
        alert('Please select gender');
        return false;
      }
      // if(!this.refs.color.value){
      //   alert('Please select color');
      //   return false;
      // }
      // if(!this.refs.note.value){
      //   alert('Please enter note');
      //   return false;
      // }
      let result = confirm('Are you sure to save details ?');
      if(result) {
      this.state = {
        firstname: this.refs.empfirstname.value,
        lastname: this.refs.emplastname.value,
        email: this.refs.empemail.value,
        sex: this.refs.male.checked ? 'male' : 'female',
        color: this.refs.color.value,
        isemployeed: this.refs.employeed.checked ? 'Yes' : 'No',
        note: this.refs.note.value,
      };
      this.setState(this.state);
      // this.refs.empfirstname.value = "";
      // this.refs.emplastname.value = "";
      // this.refs.empemail.value = "";
      // this.refs.male.checked = false;
      // this.refs.female.checked = false;
      // this.refs.color.value = "";
      // this.refs.employeed.checked = false;
      // this.refs.note.value="";
      console.log(this.state);
    }
    else {
      return false;
    }
    }
    handleClear(e) {
      e.preventDefault();
      this.refs.empfirstname.value = "";
      this.refs.emplastname.value = "";
      this.refs.empemail.value = "";
      this.refs.male.checked = false;
      this.refs.female.checked = false;
      this.refs.color.value = "";
      this.refs.employeed.checked = false;
      this.refs.note.value="";
      this.state = {
        firstname: "",
        lastname:"",
        email:"",
        gender:"",
        color:"",
        isemployeed:"",
        note:"",
      };
      this.setState(this.state);
      console.log(this.state);
    }
  render() {
    return (
      <div className="container">
        <div style={{textAlign: 'right'}}><a href="/"> {'<< Back'}</a></div>  
      <table >
      <tbody>
      <tr>
        <td colSpan="2">
          <h1>Employee Details Form</h1>
        </td>
      </tr>
      <tr>
      <td>
        &nbsp;
      </td>
      <td className="bodycontent">
        <form ref="form">
      First Name: &nbsp;
      <input ref="empfirstname" type="text" /><br/><br/>
      Last Name: &nbsp;
      <input ref="emplastname" type="text"/><br/><br/>
      Email: &nbsp;
      <input ref="empemail" type="text"/><br/><br/>
      gender: &nbsp;
      <input type="radio" ref="male" value="male"/> Male&nbsp;
      <input type="radio" ref="female" value="female"/> Female<br/><br/>
      Favorite Color: &nbsp;
      <select ref="color">
      <option value="">Select</option>
      <option value="Red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Green">Green</option>
      </select><br/><br/>
      <input type="checkbox"  ref="employeed" defaultChecked="" />&nbsp;Employeed<br/>
      Note:&nbsp;
      <textarea ref="note" required/><br/><br/>
      <button className="btnprimary" onClick={this.handleSubmit.bind(this)}>Submit</button>&nbsp;&nbsp;
      <button className="btnsuccess" onClick={this.handleClear.bind(this)}>Clear</button>
      </form>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
    );
  }
}
export default Form;
