import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Biography.scss';
const url = 'https://superheroapi.com/api/10217002715925793';

class Biography extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      alterEgos: '',
      aliases: [''],
      placeOfBirth: '',
      firstAppearance: '',
      publisher: '',
      alignment: ''
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const { id } = this.props;
    try {
      const getHero = await axios.get(`${url}/${id}/biography`);
      this.setState({
        alterEgos: getHero.data['alter-egos'],
        aliases: getHero.data.aliases,
        placeOfBirth: getHero.data['place-of-birth'],
        firstAppearance: getHero.data['first-appearance'],
        publisher: getHero.data.publisher,
        alignment: getHero.data.alignment
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
    const {modalIsOpen} = this.state;
    return <div className='Biography'>
      Biography
      <button onClick = {this.openModal}>Show More</button>
      <div>
      Alter-Egos: No alter egos found.
      {/* {this.state.alterEgos} */}</div>
      <div>
      Aliases:  "Insider", "Matches Malone"
      {/* {this.state.aliases} */}</div>
      <div>
      Place of Birth: Crest Hill, Bristol Township; Gotham County
      {/* {this.state.placeOfBirth} */}
      </div>
      <div>
      First Appearance: Detective Comics #27
      {/* {this.state.firstAppearance} */}</div>
      <div>
      Publisher: DC Comics
      {/* {this.state.publisher} */}</div>
      <div>
      Alignment: good
      {/* {this.state.alignment} */}</div>
    </div>;
  }
}

export default Biography;
