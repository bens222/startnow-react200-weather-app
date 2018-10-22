import { connect } from 'react-redux';
import UserInput from './UserInput';

function mapStoreToProps(store) {
  return {
    inputValue: store.userInput.inputValue,
  };
}

export default connect(mapStoreToProps)(UserInput);
