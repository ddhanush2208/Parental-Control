import { useState, useEffect } from "react";
import "../styles/admintoDo.css"

const AdminToDo = () => {
  let [info, setdata] = useState([]);
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1000/info");
      let resData = await response.json();
      setdata(resData);
    };
    fetchInfo();
  },[]);



  let handleDelete = (id) => {
    setdata(info.filter((x) => x.id !== id));
  };



  return (
    <div className="home">
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

export default  AdminToDo;
