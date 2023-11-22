const CardNote = ({ noteid, title, body, created }) => {
  return (
    <div className="notes-app_card">
      <div className="notes-app_card-body">
        <h3 title={title}>{title}</h3>
        <span>{created}</span>
        <p>{body}</p>
      </div>
      <div className="notes-app_card-action">
        <button>Delete</button>
        <button>Arsipkan</button>
      </div>
    </div>
  );
};

export default CardNote;
