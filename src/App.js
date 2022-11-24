import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/homePage';
import ToDo from './components/toDo';
import AdminLogin from './components/adminLogin';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import AdminPortal from './components/adminPortal';
import AddFavs from './components/addFavs';
import Favourites from './components/favourites';
import UserLogin from './components/userLogin';
import UserPortal from './components/userPortal';


function App() {
  let admin = "admin123@gmail.com"
  let userMail="user123@gmail.com"
  return (
    <div className="App">
      <BrowserRouter>
      {/* <AddFavs/>
      <Favourites/> */}
      <Routes>
<Route path="/" element={<HomePage/>} />
<Route path="/admin-login" element={<AdminLogin data={admin} />} />
<Route path="/admin-portal/*" element={<AdminPortal data={admin}/>}/>
<Route path="/user-login" element={<UserLogin data={userMail}/>} />
<Route path="/user-portal/*" element={<UserPortal data={userMail} />}/>






      </Routes>
      </BrowserRouter>
      
{/* <ToDo/> */}



    </div>
  );
}

export default App;
