import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import Modal from 'react-modal';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className='App'>
        <Modal>
          <input type='text' onChange={this.onChange} />
          <button>Search</button>
        </Modal>
        <SuperSearch />
      </div>
    );
  }
}

export default App;
