import { connect } from 'react-redux';
import CityInformation from './CityInformation';

function mapStoreToProps(store) {
  return {
    name: store.userInput.name,
    temperature: store.userInput.temperature,
    pressure: store.userInput.pressure,
    humidity: store.userInput.humidity,
    lowestTemp: store.userInput.lowestTemp,
    highestTemp: store.userInput.highestTemp,
    windSpeed: store.userInput.windSpeed
  };
}

export default connect(mapStoreToProps)(CityInformation);
