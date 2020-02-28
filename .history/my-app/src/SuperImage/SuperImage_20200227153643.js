import React from 'react';
import './SuperImage.scss';

class SuperImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.hero);
    return <div className='SuperImage'>Image</div>;
  }
}

export default SuperImage;
