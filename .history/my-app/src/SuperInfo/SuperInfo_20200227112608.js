import React from 'react';
import './App.css';

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
