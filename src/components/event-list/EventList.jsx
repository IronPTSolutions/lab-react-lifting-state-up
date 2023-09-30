import { useState } from "react"
import eventsData from '../../data/events.json'
import EventItem from "../event-item/eventItem"

function EventList() {
    const [events, setEvents] = useState(eventsData)

    const handleLike = (title) => {
    const eventLiked = events.map((event) => {
        if (event.title === title) {
            event.liked = !event.liked
            event.attending = event.liked ? event.attending + 1 : event.attending - 1
        }
        return event
    })
    setEvents(eventLiked)
    }

    return (
        
        
        <div className= "d-flex flex-row">
                {events.map((event, index) => (
                    <EventItem key={event.title} 
                    title={event.title} 
                    text={event.description}
                    date={event.start}
                    img={event.image}
                    tag={event.tags}
                    liked={event.liked}
                    onLike={handleLike} 
                    attending={event.attending} />

                ))}
        </div>
    )
}

export default EventList