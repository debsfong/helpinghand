import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='nav-bar'>
        <Link to='/profile' className='nav-link'>Your Profile</Link>
        <Link to='/events' className='nav-link'>Opportunities</Link>
        <Link to='/organizations' className='nav-link'>Your Organizations</Link>
      </div>
    )
  }
}

export default NavBar;
