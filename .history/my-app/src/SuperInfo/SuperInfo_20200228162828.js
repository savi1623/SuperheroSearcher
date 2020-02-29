import React from 'react';
import axios from 'axios';
import Stats from '../Stats/Stats.js';
import Biography from '../Biography/Biography.js';
import Apperance from '../Apperance/Apperance.js';
import Work from '../Work/Work.js';
import Connections from '../Connections/Connections.js';
import './SuperInfo.scss';
const url = 'https://superheroapi.com/api10217002715925793';

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
        // const getHero = await axios.get(`${url}/${id}`);
        // this.setState({
        //   superName: getHero.data.name,
        //   fullName: getHero.data.biography['full-name']
        // });
      } catch (error) {
        console.log(error);
      }
    }
  }



  render() {
    return (
      <div className='SuperInfo'>
        <div>
          Hero: {this.state.superName}
        </div>
        <div>
          Name:{this.state.fullName}
        </div>
        {/* <Stats id={this.props.id} />
        <Biography id={this.props.id} />
        <Apperance id={this.props.id} />
        <Work id={this.props.id} />
        <Connections id={this.props.id} /> */}
      </div>
    );
  }
}

export default SuperInfo;
