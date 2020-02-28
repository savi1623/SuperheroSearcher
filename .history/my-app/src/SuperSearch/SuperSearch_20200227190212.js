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

  async componentDidMount() {
    const { hero } = this.props;
    try {
      const getHero = await axios.get(`${url}/${hero}`);
      this.setState({
        id: getHero.data.results[0].id
      });
    } catch (error) {
      console.log(error);
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
