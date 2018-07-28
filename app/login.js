// Dependencies.
import React from 'react';
// Define class.
import {Input, ButtonInput, Alert} from 'react-bootstrap';
// import { browserHistory, router } from 'react-router';
// Define class.
class login extends React.Component {
  constructor(props) {
    // Pass `props` into scope.
    super(props);
    this.state = {alertVisible: false};
  }


  handleSubmit(e) {
    this.setState({alertVisible: false});
    e.preventDefault();
    console.log(this.refs.txtUserName.getValue());
    const user = this.refs.txtUserName.getValue();
    const pass = this.refs.txtPassword.getValue();
    if (user === 'test' && pass === 'test') {
      // this.props.history.pushState(null, '/homepage');
      this.props.history.push('/homepage');
    }else {
      this.setState({alertVisible: true});
    }
  }


  // Render method.
  render() {
    let styles = {
      base: {
        marginTop:60
      }
    }
    return (
      <div >
        <div style={{textAlign: 'right'}}><a href="/">{'<< Back'}</a></div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <div className="row text-center">
                  <h2>
                    One Hub learning
                    <div>
                    <h4> Virtul Learning</h4>
                    </div>
                  </h2>
                </div>
              </div>

            <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-4">
                <form role="form" >
                  <Input type="text" ref="txtUserName"
                            placeholder="User Name" required/>
                        <Input type="password"
                              placeholder="Password" ref="txtPassword" required/>
                            {    /* <Input type="select">
                                <option value="Chinese">Chinese</option>
                                <option value="English">English</option>
                                <option value="French">French</option>
                                <option value="German">German</option>
                                <option value="Spanish">Spanish</option>
                              </Input>*/ }
                        <ButtonInput type="submit" value="Login" bsStyle="warning" className="form-control" onClick={this.handleSubmit.bind(this)} />
                        </form>
              </div>
              <div className="col-md-3">
            {/*   <p> <span> System Updates:</span>
                <br/>
                <a src="#">Check your browser compatibility.</a></p>
                  <p> <span> Support:</span>
                  <br/>
                  <a src="#">Lost your login or password?</a></p>
                    <p> <span>Email Support:</span>
                    <br/>
                    <a src="#">Click here to send email to support.</a></p>*/}
          </div>
            <div className="col-md-2"></div>
            </div>
            {(() => {
              if (this.state.alertVisible) {
                return (
                        <div className="row text-center">
                          <div className="col-md-3"></div>
                            <div className="col-md-7">
                            <Alert bsStyle="warning">
                              <label ref="lblErrorMessage">Invalid UserName/Password</label>
                            </Alert>
                          </div>
                          <div className="col-md-2"></div>
                          </div>
                        );}})()}
                      </div>
                          </div>
                          </div>
                          <div className="panel-footer text-right danger">
<p>One Hub Learning &nbsp; &copy; 2017</p>
                          </div>
                          </div>
                          </div>
                          </div>
                          </div>
    );
  }
}

login.propTypes = {
  history: React.PropTypes.object,
  location: React.PropTypes.object,
};


// Export.
export default login;
