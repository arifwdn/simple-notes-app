import "./app.css";
import Header from "./Components/Header";
import FormNotes from "./Components/FormNotes";
import Notes from "./Components/Notes";
import { getInitialData } from "./utils/datas";

import { useState } from "react";

const App = () => {
  const [data, setData] = useState(getInitialData);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const cariData = (e) => {
    setSearch(e.target.value);
  };

  const titleHandle = (e) => {
    let char = e.target.value;
    if (char.length <= 50) setTitle(e.target.value);
  };

  const addData = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const body = e.target[1].value;
    const id = +new Date();
    const archived = false;
    const createdAt = new Date().toISOString();
    const obj = {
      id,
      title,
      body,
      archived,
      createdAt,
    };
    // First Method
    setData((data) => [...data, obj]);
    // Second Method
    // data.push(obj);s
    setTitle("");
    e.target[1].value = "";
  };

  const handleDelete = (e) => {
    const id = parseInt(e.target.dataset.id);
    //First Method
    // const index = data.findIndex((dt) => dt.id === id);
    // setData([...data.slice(0, index), ...data.slice(index + 1, data.length)]);
    //Second Method
    setData(data.filter((dt) => dt.id !== id));
  };
  const handleArchive = (e) => {
    const id = parseInt(e.target.dataset.id);
    const nextNote = [...data];
    const note = nextNote.find((dt) => dt.id === id);
    note.archived = !note.archived;
    setData(nextNote);
  };

  return (
    <>
      <Header handlecari={cariData} />
      <FormNotes
        submithandle={addData}
        title={title}
        handletitle={titleHandle}
      />
      <Notes
        title="Catatan Aktif"
        data={data}
        archived={false}
        search={search}
        handledelete={handleDelete}
        handlearchive={handleArchive}
      />
      <Notes
        title="Arsip"
        data={data}
        archived={true}
        search={search}
        handledelete={handleDelete}
        handlearchive={handleArchive}
      />
    </>
  );
};

export default App;
