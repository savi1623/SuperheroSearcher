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
        Intelligence: {this.state.intelligence}
        Strength: {this.state.strength}
        Speed: {this.state.speed}
        Durability: {this.state.durability}
        Power: {this.state.power}
        Combat: {this.state.combat}
      </div>
    );
  }
}

export default Stats;
