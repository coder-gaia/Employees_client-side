import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <strong>Employee Management System</strong>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/getAll" className="nav-link">
            Employees
          </Nav.Link>
          <Nav.Link as={Link} to="/createNew" className="nav-link">
            New Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
