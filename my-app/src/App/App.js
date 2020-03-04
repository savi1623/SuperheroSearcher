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
      indexOpen: false,
      team: [604, 711, 123],
      hero: 'batman',
    };
    this.onChange = this.onChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openTeam = this.openTeam.bind(this);
    this.closeTeam = this.closeTeam.bind(this);
    this.openIndex = this.openIndex.bind(this);
    this.closeIndex = this.closeIndex.bind(this);
    this.changeHero = this.changeHero.bind(this);
    this.addToTeam = this.addToTeam.bind(this);
  }

  addToTeam(e) {
    this.setState({
      team: [...this.state.team, e]
    })
  }

  onChange(e) {
    this.setState({ hero: e.target.value });
  }

  changeHero(e) {
    // console.log(e)
    this.setState({ hero: e }, () => this.openModal())
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

  openIndex() {
    this.setState({
      indexOpen: true
    })
  }

  closeIndex() {
    this.setState({
      indexOpen: false
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
          <button className='indexButton' onClick={this.openIndex}> Hero Index</button></div>
        <ReactModal isOpen={this.state.indexOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeIndex}
          className="indexModal"
          overlayClassName="indexOverlay"
          contentLabel="Index Modal">
          <div className='outer'>
            <div className='inner'></div>
            <label onClick={this.closeIndex}>Back</label>
          </div>
          <Index hero={this.state.hero} changeHero={this.changeHero} /> </ReactModal>
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
          <SuperSearch hero={this.state.hero} addToTeam={this.addToTeam} />
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
          <Team team={this.state.team} />
        </ReactModal>
      </div>
    );
  }
}

export default App;
