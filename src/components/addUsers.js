import { useState } from "react";
import "../styles/addUsers.css";
import { useNavigate } from "react-router-dom";
const AddUsers = () => {
    let history=useNavigate()
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [gender, setGender] = useState("");
  let [DOB, setDOB] = useState("");
  let [userID, setUserID] = useState("");
  let handeleSubmit = (e) => {
    e.preventDefault();
    let data = { firstname, lastname, gender, DOB, userID };
    fetch("http://localhost:1000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Data saved Successfully");
    history("/admin-portal/user-list")
  };
  return (
    <div className="adduser">
      <div className="give">
        <div className="layout">
          <div className="Formdetail">
            <h2>
              <i>Add User Details to DB</i>
            </h2>
            <form action="" onSubmit={handeleSubmit}>
              <div className="div1">
                <label htmlFor="">First Name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter First name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
              </div>
              <div className="div2">
                <label htmlFor="">Last name</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Last name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
              </div>

              <div className="div4">
                <label htmlFor="">Gender</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                <br />
              </div>
              <div className="div5">
                <label htmlFor="">Date of birth</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Date of Birth"
                  value={DOB}
                  onChange={(e) => setDOB(e.target.value)}
                />
                <br />
              </div>

              <div className="div7">
                <label htmlFor="">User Id</label>
                <br />
                <input
                  type="text"
                  placeholder="Enter User ID"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                />
                <br />
              </div>

              <button>Add User detials</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
