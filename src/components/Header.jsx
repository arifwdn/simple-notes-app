const Header = ({ handlecari }) => {
  return (
    <nav className="notes-app_header">
      <h1>Notes</h1>
      <input type="text" placeholder="Cari catatan..." onChange={handlecari} />
    </nav>
  );
};

export default Header;
