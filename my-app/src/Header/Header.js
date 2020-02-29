import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.id)
    return (
      <div className='Header'>
        <button onClick={() => this.props.newHero(this.props.id)}>{this.props.name}</button>
      </div>
    );
  }
}

export default Header;
