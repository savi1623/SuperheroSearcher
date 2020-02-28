import React from 'react';
import './SuperImage.scss';
const url = 'https://superheroapi.com/api10217002715925793search';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  render() {
    console.log(this.props.hero);
    return <div className='SuperImage'>Image</div>;
  }
}

export default SuperImage;
