import React from 'react';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import './SuperSearch.scss';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  render() {
    // if (this.props.superShow === false) {
    //   display null
    // }
    return (
      <div className='SuperSearch'>
        <div>Header</div>
        <SuperImage hero={this.props.hero} />
        <SuperInfo hero={this.props.hero} />
      </div>
    );
  }
}

export default SuperSearch;
