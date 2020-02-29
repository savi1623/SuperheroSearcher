import React from 'react';
import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.id)
    return (
      <div className='headerTile'>
        <button className='headerButton' onClick={() => this.props.newHero(this.props.id)}>{this.props.name}</button>
      </div>
    );
  }
}

export default Header;
