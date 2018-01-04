import React from 'react';
import EventIndexItem from './event_index_item';

class EventSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <EventIndexItem />
      </div>
    );
  }
}

export default EventSearch;
