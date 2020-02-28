import React from 'react';
import axios from 'axios';
import './SuperImage.scss';
const url = 'https://superheroapi.com/api10217002715925793search';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.props.hero);
    return <div className='SuperImage'>{this.state.url}</div>;
  }
}

export default SuperImage;
