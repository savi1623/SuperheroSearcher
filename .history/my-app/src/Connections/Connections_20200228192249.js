import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Connections.scss';

class Connections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      groupAffiliation: '',
      relatives: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/connections`);
        // this.setState({
        //   groupAffiliation: getHero.data['group-affiliation'],
        //   relatives: getHero.data.relatives
        // });
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
    return <div className='App'>Connections
    <button className='infoButton' onClick={this.openModal}>+</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className="connectModal"
        overlayClassName="connectOverlay"
        contentLabel="Connect Modal">
        <button className='closeButton' onClick={this.closeModal}>X</button>
        <div className='innerText'>
          <div>
            Group Affiliation: Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps
    {/* {this.state.groupAffiliation} */} </div>
          <div>
            Relatives: John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)
    {/* {this.state.relatives} */}</div>
        </div>
      </ReactModal>
    </div>;
  }
}

export default Connections;
