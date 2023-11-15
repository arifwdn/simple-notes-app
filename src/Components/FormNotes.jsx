const FormNotes = () => {
  return (
    <section className="form-container">
      <h2>Buat Catatan</h2>
      <p>Sisa Karakter : 50</p>
      <form>
        <input type="text" placeholder="Ini adalah judul..." />
        <textarea rows="13" placeholder="Tulis catatanmu disini..."></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  );
};

export default FormNotes;
