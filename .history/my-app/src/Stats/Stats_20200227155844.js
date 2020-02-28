import React from 'react';
import './Stats.scss';

class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    };
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        intelligence: '',
        strength: '',
        speed: '',
        durability: '',
        power: '',
        combat: ''
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='Stats'>Stats</div>;
  }
}

export default Stats;
