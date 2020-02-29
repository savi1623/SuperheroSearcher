import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Header' >
        {this.props.name}
      </div>
    );
  }
}

export default Header;
