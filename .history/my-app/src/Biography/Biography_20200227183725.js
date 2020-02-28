import React from 'react';
import axios from 'axios';
import './Biography.scss';
const url = 'https://superheroapi.com/api/10217002715925793/search';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alterEgos: '',
      aliases: [''],
      placeOfBirth: '',
      firstAppearance: '',
      publisher: '',
      alignment: ''
    };
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        alterEgos: getHero.data.results[0].biography.alter-egos,
        aliases: getHero.data.results[0].biography.aliases,
        placeOfBirth: getHero.data.results[0].biography.place-of-birth,
        firstAppearance: getHero.data.results[0].biography.first-appearance,
        publisher: getHero.data.results[0].biography.publisher,
        alignment: getHero.data.results[0].biography.alignment
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='Biography'>
      Biography
      <button>Show More</button>
      Alter-Egos: {this.state.alterEgos}
      Aliases: {this.state.aliases}
      Place of Birth: {this.state.placeOfBirth}
      First Appearance: {this.state.firstAppearance}
      Publisher: {this.state.publisher}
      Alignment: {this.state.alignment}
    </div>;
  }
}

export default Biography;
