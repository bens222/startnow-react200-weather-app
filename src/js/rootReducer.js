import { combineReducers } from 'redux';
import userInputReducer from './components/UserInput/userInputReducer';

const rootReducer = combineReducers({
  userInput: userInputReducer
});

export default rootReducer;
