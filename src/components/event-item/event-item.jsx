import React from 'react'
import moment from 'moment'
import './event-item.css'

function EventItem({event, onLike}) {

  const handleOnLike = () => {

    onLike(event.title);

  }


  return (
    <div className="card event shadow-hover">
      <img src={event.image} className="card-img-top" alt={event.title}/>
      <div className="card-body px-2 position-relative">
        <div className='actions position-absolute'>
          <span><i className='fa fa-user'>{event.attending}</i></span>
          <span role='button' onClick={handleOnLike}><i className={`fa fa-heart ${event.liked ? 'text-danger' : ""}`}></i></span>
        </div>
        <h5 className='mb-1 fw-lighter'>{event.title}</h5>
        <p className='time m-0'>{moment(event.start).format('lll')}</p>
        {event.tags.map(tag => (<span key= {tag} className='badge rounded-pill text-bg-light fw-light tag'>{tag}</span>))}
      </div>
    </div>
  )
}

EventItem.defaultProps = {
  onLike: () => {}
}

export default EventItem;
