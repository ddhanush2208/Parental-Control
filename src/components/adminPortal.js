import { Routes, Route } from "react-router-dom";
import Favourites from "./favourites";
import ToDo from "./toDo";
import WishList from "./wishList";
import AddUsers from "./addUsers";
import NavBar from "./navbar";
import HomePortal from "./homePortal";
import AddFavs from "./addFavs";
import UserList from "./userList";
import AdminToDo from "./adminToDo";


const AdminPortal = (probs) => {

    return ( 
        <div className="adminPortal">
          <div className="navBarcomp">
          {/* <NavBar data={probs.data} /> */}
          <NavBar   />
          </div>
         <div className="restDisp">
         <Routes>
        <Route path="/" element={<HomePortal />} />
        <Route path="/toDo" element={<AdminToDo />} />

        <Route path="/wish-list" element={<WishList />} />
        <Route path="/favourite" element={<Favourites />} />
        {/* <Route path="/add-favs" element={<AddFavs/>}   /> */}
        <Route path="/add-users" element={<AddUsers />} />
        <Route path="/user-list" element={<UserList />} />
        {/* <Route path="/user-list" element={<UserList />} /> */}


      </Routes>
         </div>

        </div>
     );
}
 
export default AdminPortal;