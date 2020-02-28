import React from 'react';
import axios from 'axios';
import './Connections.scss';
const url = 'https://superheroapi.com/api/10217002715925793/search';

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
        groupAffiliation: {'getHero.data.results[0].connections.group-affiliation'},
        relatives: getHero.data.results[0].connections.relatives
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return <div className='App'>Connections
    <button>Show More</button>
    Group Affiliation: {this.state.groupAffiliation}
    Relatives: {this.state.relatives}
    </div>;
  }
}

export default Connections;
