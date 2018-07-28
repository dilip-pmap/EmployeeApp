// Dependencies.
import React from 'react';
import ToggleContent from './Components/ToggleContent';
// Define class.
class ReactUpgrade extends React.Component {
  constructor() {
    super();
  }

  // Render method.
  render() {
    const Content = (<section>
      npm install -g npm-check-updates
    </section>);
    return (
      <div>
      <h2> React Package Upgrade </h2>
      <ToggleContent Title="STEP 1: NPM CHECK UPDATE" Content={Content} />
    </div>
    );
  }
}

// Export.
export default ReactUpgrade;
/* eslint-enable no-alert, no-console */
