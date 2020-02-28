import React from 'react';
import axios from 'axios';
import './SuperImage.scss';
const url = 'https://superheroapi.com/api10217002715925793search';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        image: getHero.data.image.url
      });
    }
  }

  render() {
    console.log(this.props.hero);
    return <div className='SuperImage'>{this.state.image}</div>;
  }
}

export default SuperImage;
