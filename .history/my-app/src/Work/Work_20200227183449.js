import React from 'react';
import axios from 'axios';
import './Work.scss';
const url = 'https://superheroapi.com/api10217002715925793/search';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      occupation: '',
        base: ''
    }
  }

  render() {
    return <div className='Work'>Work</div>;
  }
}

export default Work;
