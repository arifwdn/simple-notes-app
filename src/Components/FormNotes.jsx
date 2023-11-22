const FormNotes = ({ submithandle, handletitle, title }) => {
  return (
    <div className="notes-app_form">
      <h2>Buat Catatan</h2>
      <p>Sisa Karakter : {50 - title.length}</p>
      <form onSubmit={submithandle}>
        <input
          type="text"
          placeholder="Ini adalah judul..."
          value={title}
          onChange={handletitle}
        />
        <textarea placeholder="Tuliskan catatanmu disini..."></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default FormNotes;
