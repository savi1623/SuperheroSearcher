import React from 'react';
import Stats from '../Stats/Stats.js';
import Biography from '../Biography/Biography.js';
import Apperance from '../Apperance/Apperance.js';
import Work from '../Work/Work.js';
import Connections from '../Connections/Connections.js';
import './SuperInfo.scss';

class SuperInfo extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className='SuperInfo'>
        SuperHeroName FullName
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
