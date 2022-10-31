import React from 'react';
import { Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import navLogo from '../../../assets/png/siteLogo.png';
import '../../../Style/Main.scss'

const NavBar = () => {

 return (
  <div className="main-nav sections d-flex py-2 align-items-center justify-content-between border-bottom">
   <div className="nav-logo d-none d-lg-block">
    <img className='busibud ' src={navLogo} alt="" />
   </div>
   <Navbar collapseOnSelect expand="sm" variant="dark" className='nav-bar d-flex'>
    <Navbar.Toggle aria-controls="navbarScroll" id="navToggle" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     <Nav className=' text-black align-items-center text-uppercase'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
     >
      <Nav.Item className='nav-link'>
       <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-link'>
       <Nav.Link eventKey="link-1">Release Note</Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-link'>
       <Nav.Link eventKey="link-2">Book Now</Nav.Link>
      </Nav.Item>
      <NavDropdown title="Services" id="basic-nav-dropdown nav-link">
       <NavDropdown.Item className='nav-link-drop' href="#action/3.1">Action</NavDropdown.Item>
       <NavDropdown.Item className='nav-link-drop' href="#action/3.2">
        Another action
       </NavDropdown.Item>
       <NavDropdown.Item className='nav-link-drop' href="#action/3.3">Something</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item className='nav-link-drop' href="#action/3.4">
        Separated link
       </NavDropdown.Item>
      </NavDropdown>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div>
 );
};

export default NavBar;