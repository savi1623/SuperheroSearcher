import React from 'react';
import axios from 'axios';
import './Apperance.scss';
const url = 'https://superheroapi.com/api10217002715925793';

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
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/appearance`);
      this.setState({
        gender: getHero.data.gender,
        race: getHero.data.race,
        height: getHero.data.height[0],
        weight: getHero.data.weight[0],
        eyeColor: getHero.data.eye-color,
        hairColor: getHero.data.hair-color,
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
