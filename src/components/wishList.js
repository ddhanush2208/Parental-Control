import { useEffect, useState } from "react";
import "../styles/wishlist.css";
const WishList = () => {
  let [wish, setdata] = useState([]);
  useEffect(() => {
    let fetchInfo = async () => {
      let response = await fetch("http://localhost:1000/wishes");
      let resData = await response.json();
      setdata(resData);
    };
    fetchInfo();
  }, []);

  return (
    <div className="wishList">
      {wish.map((value) => (
        <div className="wishlistdisp">
          <h1>{value.list}</h1>
        </div>
      ))}
    </div>
  );
};

export default WishList;
