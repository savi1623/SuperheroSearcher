import React from 'react';
import './Biography.scss';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alterEgos: '',
      aliases: [''],
      placeOfBirth: '',
      firstAppearance: '',
      publisher: '',
      alignment: ''
    };
  }

  render() {
    return <div className='Biography'>Appearance</div>;
  }
}

export default Biography;
