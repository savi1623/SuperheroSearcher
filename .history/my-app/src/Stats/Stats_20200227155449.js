import React from 'react';
import './Stats.scss';

class Stats extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return <div className='Stats'>Stats</div>;
  }
}

export default Stats;
