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
        eyeColor: getHero.data['eye-color'],
        hairColor: getHero.data['hair-color'],
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='App'>Appearance
    <button>Show More</button>
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
      Eye Color:
      {/* {this.state.eyeColor} */}</div>
      <div>
      Hair Color:
      {/* {this.state.hairColor} */}</div>
    </div>;
  }
}

export default Apperance;
