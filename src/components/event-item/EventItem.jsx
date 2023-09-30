import eventsData from "../../data/events.json";

function EventItem({ title, text, date, img, tag, liked, onLike, attending }) {
   const handleClickLike = () => {
    onLike(title)
   }
   console.log(liked)
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <p role="button" onClick={handleClickLike} className={`fa fa-heart ${liked ? "text-danger" : ""}`}></p>
      <p>{attending} </p>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">{date}</p>
        {tag.map(element => (
        <span key={element} className="card-text">{element}</span>
        )
        )}
      </div>
    </div>
  );
}

export default EventItem;
