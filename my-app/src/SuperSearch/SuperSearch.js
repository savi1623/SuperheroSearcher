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
      idArr: [4, 5, 6]
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
      idArr: e
    })
  }

  render() {
    const { idArr } = this.state;
    return (
      <div className='SuperSearch'>
        {idArr.map((name) => {
          return <Header name={name} onClick={() => this.newHero(name)} />
        })}
        <SuperImage id={this.state.id} />
        <SuperInfo id={this.state.id} />
      </div>
    );
  }
}

export default SuperSearch;
