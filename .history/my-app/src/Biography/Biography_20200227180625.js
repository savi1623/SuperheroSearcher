import React from 'react';
import './Biography.scss';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alterEgos: '',
      aliases: [''],
      place-of-birth: '',
      first-appearance: '',
      publisher: 'DC Comics',
      alignment: 'good'
    };
  }

  render() {
    return <div className='Biography'>Appearance</div>;
  }
}

export default Biography;
