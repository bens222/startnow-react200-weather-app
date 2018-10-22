import React from 'react';

class CityInformation extends React.Component {
  render() {
    const {
      name,
      temperature,
      pressure,
      humidity,
      lowestTemp,
      highestTemp,
      windSpeed 
    } = this.props;

    return (
      <div className='card mt-4'>
        <div className='card-header'>City Information</div>
        <div className='card-body text-center'>
          <div className='card-text'>{ name }</div>
          <hr className='my-4' />
          <div className='row'>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Temperature</p>
              <p className='card-text'>{ temperature }</p>
            </div>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Pressure</p>
              <p className='card-text'>{ pressure }</p>
            </div>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Humidity</p>
              <p className='card-text'>{ humidity }</p>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Lowest Temp (F)</p>
              <p className='card-text'>{ lowestTemp }</p>
            </div>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Highest Temp (F)</p>
              <p className='card-text'>{ highestTemp }</p>
            </div>
            <div className='col-sm-4'>
              <p className='card-text mb-0'>Wind Speed</p>
              <p className='card-text'>{ windSpeed }</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CityInformation;
