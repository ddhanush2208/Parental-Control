import { useState } from "react";
import {useNavigate} from "react-router-dom"
import "../styles/addFavs.css"
const AddFavs = () => {
    const history=useNavigate();
    let [title, setTitle] = useState("");
    let [description, setdesc] = useState("");
  
    let handleSubmit = (e) => {
      e.preventDefault();
      let data = {
        title,
        description
      };
      fetch("http://localhost:1000/fav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("your data has been saved");
      history("/admin-portal/favourite")
    };
  return (
    <div className="addFavs">
      <div className="form">
        <h1>Add your Favourites here...!</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title"> Title :</label> <br />
          <input
            type="text"
            placeholder="Enter the Name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label htmlFor="description">Description</label> <br />
          <input
            type="text"
            placeholder="Describe Here"
            value={description}
            onChange={(e) => setdesc(e.target.value)}
          />{" "}
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddFavs;
