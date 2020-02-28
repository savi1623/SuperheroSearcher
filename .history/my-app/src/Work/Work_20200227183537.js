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

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        occupation: getHero.data.results[0].work.occupation,
        base: getHero.data.results[0].work.base
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='Work'>Work</div>;
  }
}

export default Work;
