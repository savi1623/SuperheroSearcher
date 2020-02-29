import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Header' onClick={this.props.newHero(this.props.name)}>
        {this.props.name}
      </div>
    );
  }
}

export default Header;
