const defaultState = {
  inputValue: '',
  name: '',
  temperature: '',
  pressure: '',
  humidity: '',
  lowestTemp: '',
  highestTemp: '',
  windSpeed: '',
  id: '',
  history: []
};

export default function userInputReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_INPUT': {
      return {
        ...state,
        inputValue: payload
      };
    }
    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        name: payload.data.name,
        temperature: payload.data.main.temp,
        pressure: payload.data.main.pressure,
        humidity: payload.data.main.humidity,
        lowestTemp: payload.data.main.temp_min,
        highestTemp: payload.data.main.temp_max,
        windSpeed: payload.data.wind.speed,
        history: [
          ...state.history,
          {
            name: payload.data.name,
            id: payload.data.weather.id,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}
