import React from 'react';
import axios from 'axios';
import './SuperImage.scss';


class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/image`);
        this.setState({
          image: getHero.data
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  //index superheros by letter to search

  render() {
    console.log(this.props.id);
    console.log(this.state.image);
    return <div className='SuperImage'>
      <img src={this.state.image} />
    </div>;
  }
}

export default SuperImage;
