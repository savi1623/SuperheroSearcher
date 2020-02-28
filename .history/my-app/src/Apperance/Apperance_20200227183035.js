import React from 'react';
import axios from 'axios';
import './Apperance.scss';
const url = 'https://superheroapi.com/api10217002715925793search';

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

  render() {
    return <div className='App'>Appearance</div>;
  }
}

export default Apperance;
