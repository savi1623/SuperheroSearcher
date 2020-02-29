import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Apperance.scss';


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

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/appearance`);
        console.log(getHero.data);
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
    <button className='infoButton' onClick={this.openModal}>+</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className="appearModal"
        overlayClassName="appearOverlay"
        contentLabel="Appear Modal">
        <button className='closeButton' onClick={this.closeModal}>X</button>
        <div className='innerText'>
          <div>
            Gender:{this.state.gender}
          </div>
          <div>
            Race: {this.state.race}
          </div>
          <div>
            Height: {this.state.height}</div>
          <div>
            Weight: {this.state.weight}</div>
          <div>
            Eye Color:  {this.state.eyeColor}</div>
          <div>
            Hair Color:{this.state.hairColor}</div>
        </div>
      </ReactModal>
    </div>;
  }
}

export default Apperance;
