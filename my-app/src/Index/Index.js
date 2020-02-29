import React from 'react';
import axios from 'axios';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  // async componentDidMount() {
  //   const { hero } = this.props;
  //   console.log('front end called')
  //   const getHero = await axios.get(`http://localhost:5000/index/heros`)
  // }

  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default Index;