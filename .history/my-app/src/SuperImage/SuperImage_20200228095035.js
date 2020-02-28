import React from 'react';
import axios from 'axios';
import './SuperImage.scss';
const url = 'https://superheroapi.com/api/10217002715925793/';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/image`);
      this.setState({
        image: getHero.data.url
      });
    } catch (error) {
      console.log(error);
    }
  }

  //index superheros by letter to search

  render() {
    console.log(this.props.id);
    console.log(this.state.image);
    return <div className='SuperImage'>{this.state.image}
      <img src="https://upload.wikimedia.org/wikipedia/en/1/19/Batman_%28circa_2016%29.png" />
    </div>;
  }
}

export default SuperImage;
