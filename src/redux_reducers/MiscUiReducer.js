import { UI_TOGGLE_TEST } from '../redux_actions/types';

const INITIAL_STATE = {
  testBoolean: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case UI_TOGGLE_TEST:
      return {
        ...state,
        testBoolean: !state.testBoolean,
      };

    default:
      return state;
  }
};
