import React from 'react';
import axios from 'axios';
import './Stats.scss';

const url = 'https://superheroapi.com/api/10217002715925793';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    };
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

  render() {
    return (
      <div className='Stats'>
        Stats
        <button> Open </button>
        <div>
        Intelligence:
        {/* {this.state.intelligence} */}</div>
        <div>
        Strength:
        {/* {this.state.strength} */}</div>
        <div>
        Speed:
        {/* {this.state.speed} */}</div>
        <div>
        Durability:
        {/* {this.state.durability} */}</div>
        <div>
        Power:
        {/* {this.state.power} */}</div>
        <div>
        Combat:
        {/* {this.state.combat} */}</div>
      </div>
    );
  }
}

export default Stats;
