import React from 'react';
import UserInput from './components/UserInput';
import CityInformation from './components/CityInformation';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather Application</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
        <div id='user-input'>
          <UserInput />
        </div>
        <div className='row'>
          <div className='col-6'>
            <CityInformation />
          </div>
          <div className='col-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
