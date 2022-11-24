import { Link,useNavigate } from "react-router-dom";
import "../styles/userLogin.css";
import {useState} from "react";
import img1 from "../images/userbtn.png"


const UserLogin = (p) => {
  let[user,setUser]= useState('')
  let [password,setPassword]= useState('');
  let navigate =useNavigate()
  let handleSubmit=(e)=> {
    e.preventDefault();
    if(user===p.data && password==="user"){
      navigate('/user-portal')
    }else{
      alert("Invalid credentials")
    }
  }
  return (
    <section className="userlogin">
      <div className="userLoginDisp">
        <h1>Welcome to User page</h1>
        <img src={img1} alt="" />
        <div className="form" onSubmit={handleSubmit}>
        <form action="">
          <label htmlFor="">User ID</label>
          <br />
          <input type="text" placeholder="Enter your UserID" value={user} onChange={(e)=>setUser(e.target.value)} />
          <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <br />
          <button>LogIn</button>
          <button>
            <Link to="/">Home page</Link>
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default UserLogin;
