import React, { useState } from "react";
import EventData from "../../data/events.json"
import EventItem from "../event-item/event-item";

function EventList(){

  const [events, setEvents] = useState(EventData)

  const handleOnLineEvent = (title) => {

    setEvents(events.map(event => {

      if(event.title === title){
        event.liked = !event.liked;
        event.attending = event.liked ? event.attending + 1 : event.attending - 1;
      }
      return event;
    }))
  }

  return( 
    
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
  
        {events.map(event => (  
          <div className="col" key={event.title}>
            <EventItem event={event} onLike={handleOnLineEvent} />
          </div>
        ))}
      </div>

  )
}


export default EventList;
