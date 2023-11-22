import CardNote from "./CardNote";
import { showFormattedDate } from "../utils/datas";

const Notes = ({ title, data, archived, search }) => {
  const showCard = (datas) => {
    let tempData = datas.filter((dt) => {
      let title = dt.title.toLowerCase();
      let param = search.toLowerCase();
      if (dt.archived === archived && title.includes(param)) {
        return dt;
      }
    });
    if (tempData.length < 1) {
      return <center>Tidak ada catatan</center>;
    } else {
      return tempData.map((dt) => {
        return (
          <CardNote
            key={dt.id}
            noteid={dt.id}
            title={dt.title}
            body={dt.body}
            created={showFormattedDate(dt.createdAt)}
          />
        );
      });
    }
  };
  return (
    <div className="notes-app_notes">
      <h2>{title}</h2>
      <div className="notes-app_card-container">{showCard(data)}</div>
    </div>
  );
};

export default Notes;
