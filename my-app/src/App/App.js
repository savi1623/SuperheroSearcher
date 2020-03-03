import React from 'react';
import SuperSearch from '../SuperSearch/SuperSearch.js';
import Index from '../Index/Index.js';
import Team from '../Team/Team.js'
import ReactModal from 'react-modal';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      teamIsOpen: false,
      hero: 'batman',
    };
    this.onChange = this.onChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openTeam = this.openTeam.bind(this);
    this.closeTeam = this.closeModal.bind(this);
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

  openTeam() {
    this.setState({
      teamIsOpen: true
    })
  }

  closeTeam() {
    this.setState({
      teamIsOpen: false
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
        <div className='buttonInline'>
          <button className='teamButton' onClick={this.openTeam}>Show Team</button>
          <button className='indexButton'> Hero Index</button></div>
        {/*
        <Index hero={this.state.hero} /> */}
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="searchModal"
          overlayClassName="searchOverlay"
          contentLabel="Search Modal">
          <div className='outer'>
            <div className='inner'></div>
            <label onClick={this.closeModal}>Back</label>
          </div>
          <SuperSearch superShow={this.state.superShow} hero={this.state.hero} />
        </ReactModal>
        <ReactModal
          isOpen={this.state.teamIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeTeam}
          className="TeamModal"
          overlayClassName="TeamOverlay"
          contentLabel="Team Modal">
          <div className='outer'>
            <div className='inner'></div>
            <label onClick={this.closeTeam}>Back</label>
          </div>
          <Team />
        </ReactModal>
      </div>
    );
  }
}

export default App;
