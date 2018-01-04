import { connect } from 'react-redux';
import EventIndex from './event_index';

const mapStateToProps = (state) => ({
  // events: state.events
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
