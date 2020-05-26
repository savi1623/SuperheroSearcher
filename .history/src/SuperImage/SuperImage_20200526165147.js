import React from 'react';
import axios from 'axios';
import './SuperImage.scss';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    };
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:4000/${id}/image`);
        // console.log(getHero.data)
        this.setState({
          image: getHero.data.url,
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  //index superheros by letter to search

  render() {
    return (
      <div className='SuperImage'>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default SuperImage;
