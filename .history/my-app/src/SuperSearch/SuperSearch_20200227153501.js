import React from 'react';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import Modal from 'react-modal';
import './SuperSearch.scss';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // if (this.props.superShow === false) {
    //   display null
    // }
    console.log(this.props.hero);
    return (
      <div className='SuperSearch'>
        <div>Header</div>
        <SuperImage />
        <SuperInfo />
      </div>
    );
  }
}

export default SuperSearch;
