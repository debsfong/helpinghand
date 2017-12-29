import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionLinks from './session_links';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
