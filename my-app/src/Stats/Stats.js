import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Stats.scss';


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

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/powerstats`);
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
          <button className='closeButton' onClick={this.closeModal}>X</button>
          <div className='innerText'>
            <div>
              Intelligence: {this.state.intelligence}</div>
            <br />
            <div>
              Strength: {this.state.strength}</div>
            <br />
            <div>
              Speed:  {this.state.speed}</div>
            <br />
            <div>
              Durability: {this.state.durability}</div>
            <br />
            <div>
              Power:{this.state.power}</div>
            <br />
            <div>
              Combat: {this.state.combat}</div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Stats;
