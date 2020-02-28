import React from 'react';
import axios from 'axios';
import './Work.scss';
const url = 'https://superheroapi.com/api10217002715925793';

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      occupation: '',
        base: ''
    }
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/work`);
      this.setState({
        occupation: getHero.data.occupation,
        base: getHero.data.base
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log(this.props.id)
    return (<div className='Work'>Work
    <button>Show More</button>
    Occupation: {this.state.occupation}
    Base: {this.state.base}
    </div>);
  }
}

export default Work;
