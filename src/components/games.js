import Card from "react-bootstrap/Card";
import "../styles/games.css"
function Games() {
  return (
    <div className="cards">
      <div className="cardDisp">
      <div className="firstCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/ok-ko-lets-be-heroes-parking-lot-wars.png"
          />
          <Card.Body>
            <Card.Title>OK KO Lets be Heores</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/ok-ko-lets-be-heroes-parking-lot-wars/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="secondCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/powerpuff-girls-unordinary-week.png"
          />
          <Card.Body>
            <Card.Title>Powerpuff Girls </Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/powerpuff-girls-unordinary-week/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="thirdCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/danger-mouse.png"
          />
          <Card.Body>
            <Card.Title>Danger Mouse Ultimate</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/ok-ko-lets-be-heroes-parking-lot-wars/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="fourthCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/incredible-hulk-chitauri-takedown.png"
          />
          <Card.Body>
            <Card.Title>Incredible Hulk </Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/incredible-hulk-chitauri-takedown/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="fifthCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/spider-man-mysterios-rush.png"
          />
          <Card.Body>
            <Card.Title>Spider-Man Mysterio Rush</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/spider-man-mysterio-rush/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="sixthtCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/batman-gotham-city-speed.png"
          />
          <Card.Body>
            <Card.Title>Batman Gotham City Speed</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/batman-gotham-city-speed/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="seventhCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/images/avengers-hydra-dash.png"
          />
          <Card.Body>
            <Card.Title>Avengers Hydra Rush</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/avengers-hydra-dash/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="eighthCard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://plays.org/wp-content/uploads/justice-league-action-nuclear-rescue-150x150.png"
          />
          <Card.Body>
            <Card.Title>Justice League</Card.Title>
          </Card.Body>

          <Card.Body>
            <button href="https://plays.org/justice-league-action-nuclear-rescue/">
              Play-Now
            </button>
          </Card.Body>
        </Card>
      </div>
      </div>
    </div>
  );
}

export default Games;
