// Dependencies.
import React from 'react';
// Define class.
class ToogleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggled: !this.state.toggled });
  }

  // Render method.
  render() {
    return (
      <div>
      <div onClick={this.handleToggle}>
      <h3>{this.state.toggled ?  '+ ' : '- ' }{this.props.Title}</h3>
      </div>
            <hr/>
      <div style={ this.state.toggled ? {display: 'none'} : {display: 'block'} }>
        {this.props.Content}
      </div>
      </div>
    );
  }
}

// Validation.
ToogleContent.propTypes = {
  Title: React.PropTypes.string,
  Content: React.PropTypes.node,
};

// Export.
export default ToogleContent;
/* eslint-enable no-alert, no-console */
