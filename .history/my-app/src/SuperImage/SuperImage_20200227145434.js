import React from 'react';
import './SuperSearch.scss';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='SuperImage'>
        <div>Header</div>
        <SuperImage />
        <SuperInfo />
      </div>
    );
  }
}
