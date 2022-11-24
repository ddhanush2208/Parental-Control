import { useState, useEffect } from "react";
import "../styles/toDo.css"

const ToDo = () => {
  let [info, setdata] = useState([]);
  let [list, setlist] = useState("");
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1000/info");
      let resData = await response.json();
      setdata(resData);
    };
    fetchInfo();
  },);

  let submit = (e) => {
    e.preventDefault();
    let data = {
      list,
    };

    fetch("http://localhost:1000/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  let handleDelete = (id) => {
    setdata(info.filter((x) => x.id !== id));
  };

  let tada=document.getElementsByClassName("todo");
  let go=document.getElementsByClassName("i");
  function click(){
    tada[0].style.opacity="1";
    tada[0].style.transition="opacity 1s ease-in-out";
    go[0].style.visibility="hidden";
  }

  return (
    <div className="home">
        <button onClick={click} className="i" >Click here to remind yourself of your remaining tasks</button>
      <div className="todo" >
        <form action="" onSubmit={submit}>
          <label htmlFor="">To-Do List</label> <br />
          <br /> <input
            type="text"
            placeholder="Enter your remaining Tasks"
            value={list}
            onChange={(e) => setlist(e.target.value)}
          /> <br />

          <br /> <button>Add</button>
        </form>
      </div>
  <h1>Remaining tasks : {info.length} </h1>
      <div className="disp">
        
        {info.map((value) => (
          <div className="det">
            <h1>{value.list}</h1>
            <button onClick={()=>handleDelete(value.id)}>delete</button>
            
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ToDo;
