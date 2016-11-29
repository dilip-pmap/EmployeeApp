import React, {Component} from 'react';
class Test extends Component {

render () {
return (
<div className="container">
  <div clasName="row">
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">One Hub Learning</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#portfolio">PORTFOLIO</a></li>
        <li><a href="#pricing">PRICING</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
<br/>
<br/>
<div clasName="row">
<div clasName="jumbotron text-center">
  <h1>One Hub Learning</h1>
  <p>Virtual Learning </p>
</div>
</div>
</div>
);
}

}


export default Test
