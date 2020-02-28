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
        <Stats hero={this.props.hero} />
        <Biography hero={this.props.hero} />
        <Apperance hero={this.props.hero} />
        <Work hero={this.props.hero} />
        {/* <Connections hero={this.props.hero} /> */}
      </div>
    );
  }
}

export default SuperInfo;
