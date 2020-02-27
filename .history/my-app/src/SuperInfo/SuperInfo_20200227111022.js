import React from 'react';
import './App.css';

class SuperInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <SuperSearch />
      </div>
    );
  }
}

export default SuperInfo;
