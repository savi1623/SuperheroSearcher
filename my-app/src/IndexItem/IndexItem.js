import React from 'react';

class IndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const hero = this.props.hero.toLowerCase();
    return (
      <div className='indexItem'>
        <button onClick={() => this.props.changeHero(hero)}>{this.props.hero}</button>

      </div >
    )
  }
}

export default IndexItem;