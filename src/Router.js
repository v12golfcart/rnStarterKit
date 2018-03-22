// libs
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

// components
import { SecondPage } from './components';
import FirstPage from './containers/FirstPage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

      <Scene key="main">
        <Scene 
          initial
          rightTitle="Next"
          onRight={() => Actions.secondPage()}
          key="firstPage"
          component={FirstPage}
          title="First Page"
        />
        <Scene 
          key="secondPage"
          component={SecondPage}
          title="Second Page"
          backTitle="Back"
        />        
      </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
