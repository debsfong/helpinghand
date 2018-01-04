import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinksContainer from './session_links_container';

class Header extends React.Component {
  personalHeader() {
    return (
      <div className="header-right">
        <button className="header-button" onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }

  sessionLinks() {
    return (
      <SessionLinksContainer />
    );
  }

  render() {
    return (
      <header className="header">
        <Link to="/" className="header-left">
          <i className="far fa-hand-peace"></i>
          <h1 className="page-title">Helping Hand</h1>
        </Link>
        {this.props.currentUser ? this.personalHeader() : this.sessionLinks()}
      </header>
    );
  }
}

export default Header;
