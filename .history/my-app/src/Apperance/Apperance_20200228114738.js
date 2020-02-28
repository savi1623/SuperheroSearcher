import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Apperance.scss';
const url = 'https://superheroapi.com/api10217002715925793';

class Apperance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      gender: '',
      race: '',
      height: '',
      weight: '',
      eyeColor: '',
      hairColor: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/appearance`);
      this.setState({
        gender: getHero.data.gender,
        race: getHero.data.race,
        height: getHero.data.height[0],
        weight: getHero.data.weight[0],
        eyeColor: getHero.data['eye-color'],
        hairColor: getHero.data['hair-color'],
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
    return <div className='Appearance'>Appearance
    <button className='infoButton' onClick={this.openModal}>Show More</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className="appearModal"
        overlayClassName="appearOverlay"
        contentLabel="Appear Modal">
        <button onClick={this.closeModal}>Close</button>
        <div>
          Gender: male
      {/* {this.state.gender} */}</div>
        <div>
          Race: white
      {/* {this.state.race} */}</div>
        <div>
          Height: 5'10"
       {/* {this.state.height} */}</div>
        <div>
          Weight: 175 lbs
      {/* {this.state.weight} */}</div>
        <div>
          Eye Color: Blue
      {/* {this.state.eyeColor} */}</div>
        <div>
          Hair Color: Black
      {/* {this.state.hairColor} */}</div>
      </ReactModal>
    </div>;
  }
}

export default Apperance;
