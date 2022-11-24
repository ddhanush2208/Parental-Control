import { Link } from "react-router-dom";
import "../styles/homePage.css";
import img1 from "../images/adminbtn.png";
import img2 from "../images/userbtn.png";


const HomePage = () => {

  let a1 = document.getElementsByClassName("adminbtn");
  let b1 = document.getElementsByClassName("userbtn");
  let abc = document.getElementsByClassName("id1");
  let two = document.getElementsByClassName("id2");

  function click1(){
    a1[0].style.opacity = "1";
    a1[0].style.transition = "opacity 1s ease-in-out"
    abc[0].style.visibility = "hidden"
  }
  function click2(){
    b1[0].style.opacity = "1";
    b1[0].style.transition = "opacity 1s ease-in-out"
    two[0].style.visibility = "hidden"
  }

  return (
    <section className="homepage">
      <h1 id="h1">KidZone</h1>
      <button onClick={click1} className="id1">
            For Admin
          </button>
          <button onClick={click2} className="id2">
          For User
        </button>

      <div className="homepagedisp">
        <div className="adminbtn">
          

          <img src={img1} alt="" />
          <button id="one">
            <Link to="/admin-login">Admin Login</Link>
          </button>
        </div>
       
        <div className="userbtn">
          <img src={img2} alt="" /> <br />
          <button id="two">
            <Link to="/user-login">User Login</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
