import React from 'react';

class SearchHistory extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div className='card mt-4'>
        <div className='card-header'>Search History</div>
        <div className='card-body'>
          <ul className='list-group'>
            {
              history.map((searchItem, index) => (
                <li key={ index } className='list-group-item'>
                  <div className='row'>
                    <p className='col-9 mb-0'>{ searchItem.name }</p>
                    <div className='col-3 mb-0'>
                      <p className='mb-0'>{ searchItem.time }</p>
                      <p className='mt-0 mb-0'>{ searchItem.date }</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchHistory;
