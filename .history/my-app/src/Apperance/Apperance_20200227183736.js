import React from 'react';
import axios from 'axios';
import './Apperance.scss';
const url = 'https://superheroapi.com/api10217002715925793/search';

class Apperance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
      race: '',
      height: '',
      weight: '',
      eyeColor: '',
      hairColor: ''
    }
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        gender: getHero.data.results[0].appearance.gender,
        race: getHero.data.results[0].appearance.race,
        height: getHero.data.results[0].appearance.height[0],
        weight: getHero.data.results[0].appearance.weight[0],
        eyeColor: getHero.data.results[0].appearance.eye-color,
        hairColor: getHero.data.results[0].appearance.hair-color,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='App'>Appearance
    <button>Show More</button>
      Gender: {this.state.gender}
      Race: {this.state.race}
      Height: {this.state.height}
      Weight: {this.state.weight}
      Eye Color: {this.state.eyeColor}
      Hair Color: {this.state.hairColor}
    </div>;
  }
}

export default Apperance;
