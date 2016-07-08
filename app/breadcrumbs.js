import Breadcrumbs from 'react-breadcrumbs';
import React from 'react';

class Breadcrumbs extends Component {
  render() {
    return(
      <div>
        <Breadcrumbs
          routes={this.props.routes}
          params={this.props.params}
          setDocumentTitle={true}
        />
      </div>
    );
  }
}

Breadcrumbs.PropTypes = {
  routes: React.PropTypes.object;
  params: React.PropTypes.object;
};
export default Breadcrumbs;
