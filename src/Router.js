// libs
import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

// components
import { Home, SecondPage } from './components';

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
          component={Home}
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
