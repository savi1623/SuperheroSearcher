import React from 'react';
import SearchImage from './SearchImage/SearchImage.js';
import SuperInfo from './SuperInfo/SuperInfo.js';
import './SuperSearch.scss';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <div>Header</div>
        <SearchImage />
        <SuperInfo />
      </div>
    );
  }
}

export default SuperSearch;
