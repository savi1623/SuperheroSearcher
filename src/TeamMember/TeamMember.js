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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      const getHero = await axios.get(`http://localhost:5000/${hero}/image`);
<<<<<<< HEAD
=======
      const getHero = await axios.get(`http://ec2-54-153-66-212.us-west-1.compute.amazonaws.com
      :5000/${hero}/image`);
      // console.log(getHero.data)
>>>>>>> 40fc00a... updated server routes
      this.setState({
        image: getHero.data.url,
        name: getHero.data.name,
        id: getHero.data.id
      }, () => console.log(this.state));
=======
=======
      const getHero = await axios.get(`http://localhost:4000/${hero}/image`);
>>>>>>> 4e75767... updated port numbers
=======
      const getHero = await axios.get(`http://localhost:4000/${hero}/image`);
>>>>>>> 4e75767d8f02f591a48f56dfa68558d056804a81
      this.setState(
        {
          image: getHero.data.url,
          name: getHero.data.name,
          id: getHero.data.id,
        },
        () => console.log(this.state)
      );
<<<<<<< HEAD
>>>>>>> e127afb... added Knex as a way to connecto to heroku
=======
>>>>>>> 4e75767d8f02f591a48f56dfa68558d056804a81
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
