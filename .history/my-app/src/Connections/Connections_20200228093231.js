import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Connections.scss';
const url = 'https://superheroapi.com/api/10217002715925793';

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

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/connections`);
      this.setState({
        groupAffiliation: getHero.data['group-affiliation'],
        relatives: getHero.data.relatives
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
    return <div className='App'>Connections
    <button onClick={this.openModal}>Show More</button>
      <button onClick={this.closeModal}>Close</button>
      <div>
        Group Affiliation: Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps
    {/* {this.state.groupAffiliation} */} </div>
      <div>
        Relatives: John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)
    {/* {this.state.relatives} */}</div>
    </div>;
  }
}

export default Connections;
