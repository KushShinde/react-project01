import React from 'react'
import { Nav,Navbar,Container,NavDropdown} from 'react-bootstrap';
import { Link } from "react-router-dom";



export default function Navbar01() {
  return (
    <div>
   <Navbar  expand="lg">
    <Container className='container'>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link ><Link to="/">Home</Link>  </Nav.Link>
            
          <Nav.Link > <Link to="/Tourism ">Tourism </Link></Nav.Link>
          <Nav.Link ><Link to="/Fitness">Fitness</Link> </Nav.Link>
          <Nav.Link > <Link to="/Technology">Technology</Link> </Nav.Link>
          <Nav.Link ><Link to="/Bollywood">Bollywood</Link></Nav.Link>
          <Nav.Link> <Link  to="/Food">Food</Link> </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <hr/>
  </div>
  )
}
