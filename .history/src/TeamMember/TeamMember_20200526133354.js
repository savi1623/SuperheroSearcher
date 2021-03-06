import React from 'react';
import axios from 'axios';
import './TeamMember.scss';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      name: '',
      id: 0,
    };
    // this.deleteHero = this.deleteHero.bind(this)
  }

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`http://localhost:5000/${hero}/image`);
      this.setState(
        {
          image: getHero.data.url,
          name: getHero.data.name,
          id: getHero.data.id,
        },
        () => console.log(this.state)
      );
    } catch (error) {
      console.log(error);
    }
  }

  // deleteHero() {
  //   axios.delete(`http://localhost:5000/team/${this.state.id}`)
  //     .then(() => {
  //       this.componentDidMount()
  //     })
  // }

  render() {
    const { image } = this.state;
    return (
      <div className='TeamMember'>
        {/* <button onClick={this.deleteHero()}>Delete Member</button> */}
        <img src={image} className='teamImg' />
        <br />
        <div className='teamName'>{this.state.name}</div>
        {this.props.team}
      </div>
    );
  }
}

export default TeamMember;
