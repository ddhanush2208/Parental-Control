import { useState, useEffect } from "react";
import "../styles/personalNotes.css";

const PersonalNotes = () => {
  let [info, setdata] = useState([]);
  let [list, setlist] = useState("");
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1000/notes");
      let resData = await response.json();
      setdata(resData);
    };
    fetchInfo();
  }, []);

  let submit = (e) => {
    e.preventDefault();
    let data = {
      list,
    };

    fetch("http://localhost:1000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="pnotes">
      <div className="notesdisp">
        <form action="" onSubmit={submit}>
          <label htmlFor="">Thoughts</label> <br />
          <br />
          <div className="ninput">
            <textarea name="wish" id="wishNotes" cols="30" rows="10" placeholder="Enter your Thoughts here..."
              value={list}
              onChange={(e) => setlist(e.target.value)}></textarea>
            {/* <input
              type="text"
              placeholder="Enter your Thoughts here..."
              value={list}
              onChange={(e) => setlist(e.target.value)}
            /> */}
          </div>{" "}
          <br />
          <br /> <button>Add</button>
        </form>
      </div>
      <div className="notesdisp">
        {info.map((value) => (
          <div className="ndisp">
            <p>{value.list}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalNotes;
