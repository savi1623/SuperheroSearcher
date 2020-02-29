import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Biography.scss';


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

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`http://localhost:5000/${id}/biography`);
        console.log(getHero.data)
        // this.setState({
        //   alterEgos: getHero.data['alter-egos'],
        //   aliases: getHero.data.aliases,
        //   placeOfBirth: getHero.data['place-of-birth'],
        //   firstAppearance: getHero.data['first-appearance'],
        //   publisher: getHero.data.publisher,
        //   alignment: getHero.data.alignment
        // });
      } catch (error) {
        console.log(error);
      }
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
    const { modalIsOpen } = this.state;
    return <div className='Biography'>
      Biography
      <button className='infoButton' onClick={this.openModal}>+</button>
      <ReactModal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className="bioModal"
        overlayClassName="bioOverlay"
        contentLabel="Bio Modal">
        <button className='closeButton' onClick={this.closeModal}>X</button>
        <div className='innerText'>
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
        </div>
      </ReactModal>
    </div>;
  }
}

export default Biography;
