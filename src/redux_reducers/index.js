import { combineReducers } from 'redux';
import MiscUiReducer from './MiscUiReducer';

export default combineReducers({
  miscUi: MiscUiReducer,
});
