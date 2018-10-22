import React from 'react';

import { getWeather, setInput } from './userInputActions';

class UserInput extends React.Component {
  constructor(props) {
    super(props);

    this.getCity = this.getCity.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getButtonCity = this.getButtonCity.bind(this);
  }

  handleInput(event) {
    const { dispatch } = this.props;
    dispatch(setInput(event.target.value));
  }

  getButtonCity(event) {
    const { dispatch } = this.props;
    dispatch(getWeather(event.target.value));
  }

  getCity() {
    const { dispatch, inputValue } = this.props;
    dispatch(getWeather(inputValue));
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <button
                className='btn btn-outline-secondary'
                onClick={ this.getButtonCity }
                value='Palmdale'
              >
              Palmdale, CA
              </button>
              <button
                className='btn btn-outline-secondary'
                onClick={ this.getButtonCity }
                value='Denver'
              >
              Denver, CO
              </button>
              <button
                className='btn btn-outline-secondary'
                onClick={this.getButtonCity }
                value='Knoxville'
              >
              Knoxville, TN
              </button>
            </div>
            <input
              className='form-control'
              placeholder='...Or a Enter a City Here'
              onChange={ this.handleInput }
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-success'
                onClick={ this.getCity }
              >
              Go!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
