import React from 'react';
import './App.css';

class App extends React.Component {
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

export default App;
