import React from 'react';
import axios from 'axios';
import './Connections.scss';
const url = 'https://superheroapi.com/api10217002715925793search';

class Connections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupAffiliation: '',
      relatives: ''
    }
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        groupAffiliation: getHero.data.results[0].connections.group-affiliation,
        relatives: getHero.data.results[0].connections.relatives
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return <div className='App'>Appearance</div>;
  }
}

export default Connections;
