import React from 'react';
import axios from 'axios';
import Stats from '../Stats/Stats.js';
import Biography from '../Biography/Biography.js';
import Apperance from '../Apperance/Apperance.js';
import Work from '../Work/Work.js';
import Connections from '../Connections/Connections.js';
import './SuperInfo.scss';


class SuperInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      superName: '',
      fullName: ''
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/biography`);
        this.setState({
          superName: getHero.data.name,
          fullName: getHero.data['full-name']
        });
      } catch (error) {
        console.log(error);
      }
    }
  }



  render() {
    console.log(this.state.fullName);
    console.log(this.state.superName);
    return (
      <div className='SuperInfo'>
        <div className='hero'>
          {this.state.superName}
        </div>
        <div className='heroName'>
          {this.state.fullName}
        </div>
        <br />
        <Stats id={this.props.id} />
        <Biography id={this.props.id} />
        <Apperance id={this.props.id} />
        <Work id={this.props.id} />
        <Connections id={this.props.id} />
      </div>
    );
  }
}

export default SuperInfo;
