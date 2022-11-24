import "../styles/homePortal.css";
import img1 from "../images/iceCream.png"
import img2 from "../images/park.png"
import img3 from "../images/theater.png"
import img4 from "../images/toys.png"

const HomePortal = () => {
  return (
    <div className="homePortal">
      <div className="quote">
        <h1>Quote of the Day</h1>
        <h1>
          “By loving them for more than their abilities we show our children
          that they are much more than the sum of their accomplishments.”-
          Eileen Kennedy-Moore
        </h1>
      </div>
      <div className="gif">
        <div className="ad1">
          <marquee behavior="" direction="">
            <p>We can monetise the website by promting certain ads <br /> </p>
          </marquee>
        </div>
        <div className="gif">
          <img src="" alt="" />
          <iframe
            src="https://giphy.com/embed/xT5LMXR7iA0mSSxOBG"
            width="480"
            height="368"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href="https://giphy.com/gifs/season-5-the-simpsons-5x18-xT5LMXR7iA0mSSxOBG"></a>
          </p>
        </div>
        {/* <div className="ad2"> <marquee behavior="" direction="">
            <p>
                this is ad2</p> </marquee></div> */}
      </div>
      <div className="locations">
      <div className="cards">
      <div className="iceCream">
        <img src={img1} alt=""/>
        <br />
        <a
          href="https://goo.gl/maps/vWaEnsGZkNvD6wZg7"
          
        >Nearest Ice cream shop</a>
        </div>
        <div className="park">
        <img src={img2} alt=""/>
        <br />
        <a
          href="https://goo.gl/maps/wNqA88AoDa7CwYsS8"
          
        >Nearest Kids Park</a>
        </div>
        <div className="theater">
        <img src={img3} alt=""/>
        <br />
        <a
          href="https://goo.gl/maps/moh2JVDykmym8maD8"
          
        >Nearest Theater</a>
        </div>
        <div className="toys">
        <img src={img4} alt=""/>
        <br />
        <a
          href="https://goo.gl/maps/wNqA88AoDa7CwYsS8"
          
        >Nearest Toystore </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HomePortal;
