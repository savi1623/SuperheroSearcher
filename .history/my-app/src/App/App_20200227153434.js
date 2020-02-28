import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import Modal from 'react-modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hero: 'batman',
      searchShow: true,
      superShow: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ hero: e.target.value });
  }

  render() {
    return (
      <div className='App'>
        <input type='text' onChange={this.onChange} />
        <button onClick={this.closeModal}>Search</button>
        <SuperSearch superShow={this.state.superShow} hero={this.state.hero} />
      </div>
    );
  }
}

export default App;
