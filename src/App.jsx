import "./App.css";
import Navbar from "./Components/Navbar";
import FormNotes from "./Components/FormNotes";
import ListNotes from "./Components/ListNotes";
import Notes from "./Components/Notes";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <FormNotes />
        <ListNotes title="Catatan Aktif" />
        <ListNotes title="Arsip">
          <Notes />
          <Notes />
          <Notes />
        </ListNotes>
      </main>
    </>
  );
}

export default App;
