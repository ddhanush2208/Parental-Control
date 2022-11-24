import UserNavbar from "./userNavbar";
import {Routes, Route} from "react-router-dom"
import AddFavs from "./addFavs";
import ToDo from "./toDo";
import AddWishes from "./addWishes";
import WishList from "./wishList";
import PersonalNotes from "./personalNotes";
import Games from "./games";
import "../styles/userPortal.css"
import Favourites from "./favourites";

const UserPortal = (p) => {
    return ( <section className="userportal">
        <UserNavbar data={p.data} />
        <Routes>
        <Route path="/" element={<Games />} />
        <Route path="/User-toDo" element={<ToDo />} />
        <Route path="/add-favs" element={<AddFavs />} />
        <Route path="/favourite" element={<Favourites />} />

        <Route path="/add-wishes" element={<AddWishes />} />
        <Route path="/wish-list"  element={ <WishList/> } />
        <Route path="/notes"  element={ <PersonalNotes/> } />



        </Routes>

        
    </section> );
}
 
export default UserPortal;