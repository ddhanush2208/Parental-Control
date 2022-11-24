import { useState, useEffect } from "react";
import "../styles/addWishes.css";

const AddWishes = () => {
  let [list, setlist] = useState("");
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1000/wishes");
      let resData = await response.json();
      setlist(resData);
    };
    fetchInfo();
  }, []);

  let submit = (e) => {
    e.preventDefault();
    let data = {
      list,
    };
    fetch("http://localhost:1000/wishes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="addWishes">
      <div className="addwishgif">
        <iframe
          src="https://giphy.com/embed/fbp9TlldDwXeHWA5Li"
          width="480"
          height="270"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p>
          <a href="https://giphy.com/gifs/wish-dandelion-make-a-fbp9TlldDwXeHWA5Li"></a>
        </p>
      </div>
      <div className="addWishesdisp">
        <form action="" onSubmit={submit}>
          <label htmlFor="">Type in your Wish</label> <br />
          <br />
          <input
            type="text"
            placeholder="Enter your Wish here"
            value={list}
            onChange={(e) => setlist(e.target.value)}
          />
          <br />
          <br /> <button>Add</button>
        </form>
      </div>
      {/* <div className="disp"></div> */}
    </div>
  );
};

export default AddWishes;
