import React from 'react';
import axios from 'axios';
import './Biography.scss';
const url = 'https://superheroapi.com/api/10217002715925793';

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
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/biography`);
      this.setState({
        alterEgos: getHero.data['alter-egos'],
        aliases: getHero.data.aliases,
        placeOfBirth: getHero.data['place-of-birth'],
        firstAppearance: getHero.data['first-appearance'],
        publisher: getHero.data.publisher,
        alignment: getHero.data.alignment
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='Biography'>
      Biography
      <button>Show More</button>
      Alter-Egos:
      {this.state.alterEgos}
      Aliases:
      {this.state.aliases}
      Place of Birth:
      {this.state.placeOfBirth}
      First Appearance:
      {this.state.firstAppearance}
      Publisher:
      {this.state.publisher}
      Alignment: {
      this.state.alignment}
    </div>;
  }
}

export default Biography;
