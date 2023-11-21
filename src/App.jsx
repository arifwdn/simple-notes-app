import "./app.css";
import Header from "./Components/Header";
import FormNotes from "./Components/FormNotes";
import Notes from "./Components/Notes";

const App = () => {
  return (
    <>
      <Header />
      <FormNotes />
      <Notes title="Catatan Aktif" />
      <Notes title="Arsip" />
    </>
  );
};

export default App;
