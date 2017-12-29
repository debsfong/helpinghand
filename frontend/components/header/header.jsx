import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinksContainer from './session_links_container';

class Header extends React.Component {
  personalHeader() {
    return (
      <button className="header-button" onClick={this.props.logout}>Log Out</button>
    );
  }

  sessionLinks() {
    return (
      <SessionLinksContainer />
    );
  }

  render() {
    return (
      <header>
        <Link to="/" className="header-link">
          <h1 className="left">
            <i className="far fa-hand-peace"></i>
            Helping Hand
          </h1>
        </Link>
        {this.props.currentUser ? this.personalHeader() : this.sessionLinks()}
      </header>
    );
  }
}

export default Header;
