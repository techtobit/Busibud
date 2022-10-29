import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import navLogo from '../../../assets/png/siteLogo.png';
import '../../../Style/Main.scss'

const NavBar = () => {
 return (
  <div className="main-nav d-flex justify-content-between justify-content-center align-items-center py-2">
   <div className="nav-logo">
    <img className='busibud' src={navLogo} alt="" />
   </div>

   <div className='d-flex align-items-center justify-content-center py-2 '>
    <Nav className='nav-bar text-black align-items-center text-uppercase'
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
   </div>
  </div>
 );
};

export default NavBar;