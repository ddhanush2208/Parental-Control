import { useState, useEffect } from "react";
import '../styles/userList.css'
const UserList = () => {
  let [user, setusers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch(" http://localhost:1000/users")).json();
      setusers(res);
    };
    fetchData();
  }, []);
  return (
    <div className="userList">
      <div className="userlistDisp">
        <marquee behavior="slide" direction="" scrollamount="70" >
        <h1>Total Users : {user.length}</h1>
        </marquee>
      </div>
      <div className="maindisp">
        <div className="Userlist">
          {user.map((user) => {
            return (
              <div className="sheet">
                <div className="first">
                  First Name:{user.firstname} <br />
                  Last Name: {user.lastname} <br />
                </div>
                <div className="gender">
                  Gender: {user.gender} <br />
                  Date of Birth: {user.DOB}
                </div>
                <div className="contact">
                  User ID: {user.userID}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserList;
