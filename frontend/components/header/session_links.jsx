import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class SessionLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      modalType: '',
      username: '',
      password: ''
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalType) {
    this.setState({
      modalOpen: true,
      modalType
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    return (
      <div>
        <button className="header-button" onClick={this.openModal.bind(this, 'signup')}>Sign Up</button>
        <button className="header-button" onClick={this.openModal.bind(this, 'login')}>Log In</button>
        <Modal
          contentLabel="modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="session-modal"
          overlayClassName="modal-overlay">
          <h1>Hello Modal!</h1>
        </Modal>
      </div>
    );
  }
}

export default SessionLinks
