import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container , Nav , NavDropdown, Button, Form, FormControl} from "react-bootstrap";

const NavbarUser = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" style={{marginBottom: 90}}>
        <Container fluid>
          <Navbar.Brand href="#">My APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Users" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Add</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Update
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Delete
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                Singout
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{backgroundColor: '#ffb6c1' , borderColor: '#ffb6c1'}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarUser;
