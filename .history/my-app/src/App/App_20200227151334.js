import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <input type='text' />
        <button>Search</button>
        <SuperSearch />
      </div>
    );
  }
}

export default App;
