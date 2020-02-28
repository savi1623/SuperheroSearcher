import React from 'react';
import './Biography.scss';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alterEgos: '',
      aliases: [''],
      'place-of-birth': 'Gotham City, 25th Century',
      'first-appearance': 'Batman Beyond #1',
      publisher: 'DC Comics',
      alignment: 'good'
    };
  }

  render() {
    return <div className='Biography'>Appearance</div>;
  }
}

export default Biography;
