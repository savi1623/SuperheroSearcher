import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import ReactModal from 'react-modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hero: 'batman',
    };
    this.onChange = this.onChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  onChange(e) {
    this.setState({ hero: e.target.value });
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }


  render() {
    const { modalIsOpen } = this.state;
    return (
      <div className='App'>
        <input type='text' onChange={this.onChange} />
        <button onClick={this.openModal}>Search</button>
        <button>Back</button>
        <SuperSearch superShow={this.state.superShow} hero={this.state.hero} />
      </div>
    );
  }
}

export default App;
