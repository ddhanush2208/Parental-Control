import { useState,useEffect } from "react";
import "../styles/favourites.css"
const Favourites = () => {
    let [fav,setfav]=useState([]);

    useEffect(() => {
      let fetchData = async () => {
        let response = await fetch("http://localhost:1000/fav");
        let resData = await response.json();
        setfav(resData);
      };
      fetchData()
    },[]);
    // let handleDelete = (id) => {
    //   setfav(fav.filter((x) => x.id !== id));
    // };
    return (
         <div className="favourites">
            <div className="favdisp">
               <h1>My Favourite...?</h1>
               {
                fav.map((x) =>{
                    return(<div className="fdisp">
                 <div className="fcdisp">
                 <h2> {x.title} </h2>
                    <p>
                        {x.description}
                    </p>
                 </div>
                </div>)
                })
               }
            </div>

    </div> );
}
 
export default Favourites;