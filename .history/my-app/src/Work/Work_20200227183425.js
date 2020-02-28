import React from 'react';
import './Work.scss';

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
