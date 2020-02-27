import React from 'react';
import SuperSearch from './SuperSearch/SuperSearch.';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        Search Bar Search Button
        <SuperSearch />
      </div>
    );
  }
}

export default App;
