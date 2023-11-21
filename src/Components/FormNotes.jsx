const FormNotes = () => {
  return (
    <div className="notes-app_form">
      <h2>Buat Catatan</h2>
      <p>Sisa Karakter : 50</p>
      <form>
        <input type="text" placeholder="Ini adalah judul..." />
        <textarea placeholder="Tuliskan catatanmu disini..."></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
};

export default FormNotes;
