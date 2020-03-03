import React from 'react';
import axios from 'axios';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import Header from '../Header/Header.js'
import './SuperSearch.scss';
// const url = 'https://superheroapi.com/api/10217002715925793/search';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      newId: '',
      idArr: []
    }
    this.newHero = this.newHero.bind(this);
  }

  async componentDidMount() {
    // if (prevProps.hero !=÷= this.props.hero) {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`http://localhost:5000/${hero}`);
      console.log(getHero.data)
      this.setState({
        id: getHero.data.hero.id,
        idArr: getHero.data.heros
      });
    } catch (error) {
      console.log(error);
    }
  }

  newHero(e) {
    this.setState({
      id: e
    })
  }

  render() {
    return (
      <div >
        <div className='Header'>
          {Object.keys(this.state.idArr).map(id => {
            return <Header name={this.state.idArr[id]} id={id} newHero={this.newHero} />
          })}</div>
        <div className='SuperSearch'>
          <SuperImage id={this.state.id} />
          <SuperInfo id={this.state.id} addToTeam={this.props.addToTeam} /></div>
      </div>
    );
  }
}

export default SuperSearch;
