import React from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './Work.scss';


class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      occupation: '',
      base: ''
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const { id } = this.props;
      try {
        const getHero = await axios.get(`${url}/${id}/work`);
        // this.setState({
        //   occupation: getHero.data.occupation,
        //   base: getHero.data.base
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
    console.log(this.props.id)
    return (
      <div className='Work'>Work
    <button className='infoButton' onClick={this.openModal}>+</button>
        <ReactModal
          isOpen={modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="workModal"
          overlayClassName="workOverlay"
          contentLabel="Work Modal">
          <button className='closeButton' onClick={this.closeModal}>X</button>
          <div className='innerText'>
            <div>
              Occupation: -
    {/* {this.state.occupation} */}</div>
            <div>
              Base: Gotham City; formerly Bludhaven, New York City
    {/* {this.state.base} */}</div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

export default Work;
