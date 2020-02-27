import React from 'react';
import './SuperInfo.scss';

class SuperInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        SuperHeroName FullName
        <Stats />
        <Biography />
        <Apperance />
        <Work />
        <Connections />
      </div>
    );
  }
}

export default SuperInfo;
