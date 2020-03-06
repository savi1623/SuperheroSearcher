import React from 'react';
import axios from 'axios';
import IndexItem from '../IndexItem/IndexItem.js'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexList: [],
    }
  }

  async componentDidMount() {
    const listArr = [];
    console.log('front end called')
    axios.get(`http://ec2-54-153-66-212.us-west-1.compute.amazonaws.com
    :5000/index/heros`)
      .then(hero =>
        hero.data.map(hero => {
          return listArr.push(hero.name);
        }))
      .then(data => {
        this.setState({
          indexList: listArr
        })
      }
      )
  }

  render() {
    return (
      <div>
        {this.state.indexList.map(hero => {
          return <IndexItem hero={hero} changeHero={this.props.changeHero} />
        })}
      </div>
    )
  }
}

export default Index;