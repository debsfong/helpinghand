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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginGuest = this.loginGuest.bind(this);
    this.switchModal = this.switchModal.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.modalType === "login") {
      this.props.login({user});
    } else {
      this.props.signup({user});
    }
  }

  update(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  loginGuest(e) {
    e.preventDefault();
    const guest = {
      username: "guest",
      password: "guestpassword"
    };
    this.props.login({user: guest});
  }

  switchModal() {
    if (this.state.modalType === "login") {
      return (
        <div>
          Don't have an account?
          <button className="modalLink" onClick={this.openModal.bind(this, 'signup')} value="Sign Up">Sign Up</button>
        </div>
      )
    } else {
      return (
        <div>
          Already have an account?
          <button className="modalLink" onClick={this.openModal.bind(this, 'login')} value="Log In">Log In</button>
        </div>
      )
    }
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
          <form onSubmit={this.handleSubmit} className="session-form">
            <label>Username
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update("username")} />
            </label>
            <label>Password
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update("password")} />
            </label>
            <input type="submit" value="Submit" />
            <input type="button" value="Guest" onClick={this.loginGuest} />
          </form>
          {this.switchModal()}
        </Modal>
      </div>
    );
  }
}

export default SessionLinks
