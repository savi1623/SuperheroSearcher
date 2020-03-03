import React from 'react';
import './IndexItem.scss'

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const hero = this.props.hero.toLowerCase();
    return (
      <div >
        <button className='indexItem' onClick={() => this.props.changeHero(hero)}>{this.props.hero}</button>
      </div >
    )
  }
}

export default IndexItem;