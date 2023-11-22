const CardNote = ({
  title,
  body,
  created,
  archived,
  handledelete,
  handlearchive,
  noteid,
}) => {
  return (
    <div className="notes-app_card">
      <div className="notes-app_card-body">
        <h3 title={title}>{title}</h3>
        <span>{created}</span>
        <p>{body}</p>
      </div>
      <div className="notes-app_card-action">
        <button data-id={noteid} onClick={handledelete}>
          Hapus
        </button>
        <button data-id={noteid} onClick={handlearchive}>
          {archived ? "Pindahkan" : "Arsipkan"}
        </button>
      </div>
    </div>
  );
};

export default CardNote;
