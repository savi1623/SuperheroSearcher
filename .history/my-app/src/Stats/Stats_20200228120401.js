import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Stats.scss';

const url = 'https://superheroapi.com/api/10217002715925793';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/powerstats`);
      this.setState({
        intelligence: getHero.data.intelligence,
        strength: getHero.data.strength,
        speed: getHero.data.speed,
        durability: getHero.durability,
        power: getHero.data.power,
        combat: getHero.data.combat
      });
    } catch (error) {
      console.log(error);
    }
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
      <div className='Stats'>
        Stats
        <button className='infoButton' onClick={this.openModal}>+</button>
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="statModal"
          overlayClassName="statOverlay"
          contentLabel="Stat Modal"
        >
          <button onClick={this.closeModal}>close </button>
          <div>
            Intelligence: 100
        {/* {this.state.intelligence} */}</div>
          <div>
            Strength: 24
        {/* {this.state.strength} */}</div>
          <div>
            Speed: 28
        {/* {this.state.speed} */}</div>
          <div>
            Durability: 54
        {/* {this.state.durability} */}</div>
          <div>
            Power: 21
        {/* {this.state.power} */}</div>
          <div>
            Combat: 100
        {/* {this.state.combat} */}</div>
        </ReactModal>
      </div>
    );
  }
}

export default Stats;
