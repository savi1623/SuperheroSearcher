import React from 'react';
import axios from 'axios';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import './SuperSearch.scss';
// const url = 'https://superheroapi.com/api/10217002715925793/search';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    }
  }

  async componentDidUpdate() {
    if (prevProps.id !== this.props.id) {
      const { hero } = this.props;
      try {
        const getHero = await axios.get(`search/${hero}`);
        this.setState({
          id: getHero.data.results[0].id
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    console.log(this.state.id)
    return (
      <div className='SuperSearch'>
        {/* <div>Header</div> */}
        <SuperImage id={this.state.id} />
        <SuperInfo id={this.state.id} />
      </div>
    );
  }
}

export default SuperSearch;
