import React from 'react';
import axios from 'axios'
import './TeamMember.scss'

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: ''
    }
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`http://localhost:5000/${hero}/image`);
      // console.log(getHero.data)
      this.setState({
        image: getHero.data.url,
        name: getHero.data.name
      }, () => console.log(this.state));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { image } = this.state;
    return (
      <div className='TeamMember'>
        <img src={image} className='teamImg' />
        <br />
        <div className='teamName'>
          {this.state.name}</div>
      </div>
    )
  }
}

export default TeamMember;