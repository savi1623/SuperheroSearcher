import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import SuperImage from '../SuperImage/SuperImage.js';
import SuperInfo from '../SuperInfo/SuperInfo.js';
import './SuperSearch.scss';
const url = 'https://superheroapi.com/api/10217002715925793/search';

class SuperSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
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

  openModal() {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    })
  }

  render() {
    console.log(this.state.id)
    return (
      <div className='SuperSearch'>
        <div>Header</div>
        <SuperImage id={this.state.id} />
        <SuperInfo id={this.state.id} />
      </div>
    );
  }
}

export default SuperSearch;
