const ListNotes = (props) => {
  const { title, children } = props;
  return (
    <section>
      <h2>{title}</h2>
      <div className="card-container">{children}</div>
    </section>
  );
};

export default ListNotes;
