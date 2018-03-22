A starter kit for react native apps.  Has the following:
------------------------------------------------------------

Packages:
1. _state management_: redux, redux-thunk, redux-logger
2. _navigation_: react-native-router-flux
3. other: lodash, firebase, eslint

Setup of /src:
1. /containers for smart components
2. /components for dumb components
3. /redux_reducers and /redux_actions
4. App.js is the root which imports Router.js that contains all the scenes

Initial flow:
1. Two screens navigating back and forth via react-native-router-flux
2. A simple redux action that flips a toggle back and forth