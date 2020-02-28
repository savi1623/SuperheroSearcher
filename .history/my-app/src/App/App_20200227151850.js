import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import Modal from 'react-modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div className='App'>
        <Modal>
          <input type='text' />
          <button>Search</button>
        </Modal>
        <SuperSearch />
      </div>
    );
  }
}

export default App;
