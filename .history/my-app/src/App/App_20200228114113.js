import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import ReactModal from 'react-modal';
import './App.scss';

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
        <h1 className='logo'>Superhero Searcher</h1>
        <div className='searchForm'>
          <input className='searchBar' type='text' onChange={this.onChange} />
          <button className='searchButton' onClick={this.openModal}>Search</button>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="searchModal"
          overlayClassName="searchOverlay"
          contentLabel="Search Modal">
          <div>
            <div ></div>
            <label onClick={this.closeModal}>Back</label>
          </div>
          <SuperSearch superShow={this.state.superShow} hero={this.state.hero} />
        </ReactModal>
      </div>
    );
  }
}

export default App;
