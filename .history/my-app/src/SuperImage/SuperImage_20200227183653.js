import React from 'react';
import axios from 'axios';
import './SuperImage.scss';
const url = 'https://superheroapi.com/api/10217002715925793/search';

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
        image: getHero.data.results[0].image.url
      });
    } catch (error) {
      console.log(error);
    }
  }

  //index superheros by letter to search

  render() {
    console.log(this.props.hero);
    console.log(this.state.image);
    return <div className='SuperImage'>{this.state.image}</div>;
  }
}

export default SuperImage;
