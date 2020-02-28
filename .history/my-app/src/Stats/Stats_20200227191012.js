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
      const getHero = await axios.get(`${url}/${id}`);
      this.setState({
        intelligence: getHero.data.results[0].powerstats.intelligence,
        strength: getHero.data.results[0].powerstats.strength,
        speed: getHero.data.results[0].powerstats.speed,
        durability: getHero.data.results[0].powerstats.durability,
        power: getHero.data.results[0].powerstats.power,
        combat: getHero.data.results[0].powerstats.combat
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
