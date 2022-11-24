import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/navBar.css";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" d-flex sticky="top">
      <Container>
        <div className="nav">
          <Navbar.Brand href="/">My Website Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div className="bar">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/admin-portal/toDo">Track Activities</Nav.Link>
              <Nav.Link href="/admin-portal/favourite">Favourites</Nav.Link>
              <Nav.Link href="/admin-portal/wish-list">Wishes</Nav.Link>
              <Nav.Link href="/admin-portal/add-users">Add-User</Nav.Link>
              <Nav.Link href="/admin-portal/user-list">User-List</Nav.Link>

              <Nav.Link href="/">Log-Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
