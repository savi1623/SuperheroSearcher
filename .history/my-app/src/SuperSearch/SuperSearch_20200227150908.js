import React from 'react';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import './SuperSearch.scss';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='SuperSearch'>
        <div>Header</div>
        <SuperImage />
        <SuperInfo />
      </div>
    );
  }
}

export default SuperSearch;
