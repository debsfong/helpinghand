import React from 'react';
import EventIndexItem from './event_index_item';

class EventSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { events } = this.props;
    return (
      <div>
        <h1>Upcoming Opportunities: </h1>
        {events.map((event, idx) => (
          <EventIndexItem event={event} key={idx} />
        ))}
      </div>
    );
  }
}

EventSearch.defaultProps = {
  events: ["event"]
};

export default EventSearch;
