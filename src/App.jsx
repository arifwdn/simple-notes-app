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
    setData((data) => [...data, obj]);
    setTitle("");
    e.target[1].value = "";
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
        handlearchived={handleArchived}
      />
      <Notes
        title="Arsip"
        data={data}
        archived={true}
        search={search}
        handledelete={handleDelete}
        handlearchived={handleArchived}
      />
    </>
  );
};

export default App;
