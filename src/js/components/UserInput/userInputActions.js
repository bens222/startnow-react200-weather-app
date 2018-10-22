import axios from 'axios';

export function setInput(inputValue) {
  return {
    type: 'SET_INPUT',
    payload: inputValue
  };
}

export function getWeather(inputValue) {
  return {
    type: 'GET_WEATHER',
    payload: axios.get(`/weather/${inputValue}`)
  };
}
