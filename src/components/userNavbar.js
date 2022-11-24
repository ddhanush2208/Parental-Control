import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navBar.css";
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <Navbar bg="dark" variant="dark" expand="lg" d-flex>
      <Container>
        <div className="nav">
          <Navbar.Brand href="/">My Website Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div className="bar">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/user-portal/User-toDo">To-Do List</Nav.Link>
              <Nav.Link href="/user-portal/add-favs">Add-Favourites</Nav.Link>

              <Nav.Link href="/user-portal/favourite">Favourites</Nav.Link>
              <Nav.Link href="/user-portal/add-wishes">Add-Wishes</Nav.Link>
              <Nav.Link href="/user-portal/notes">Notes</Nav.Link>

              <Nav.Link href="/">Log-Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
        </div>
     );
}
 
export default UserNavbar;