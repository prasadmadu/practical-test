import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


const Header = ({Logout, user}) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ToDo App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">ToDo</Nav.Link>
          <Button variant="primary" type="submit" onClick={Logout}>
          Log out
          </Button>
        </Nav>
        </Container>
      </Navbar>
      welcome {user.username}
    </div>
  )
}

export default Header