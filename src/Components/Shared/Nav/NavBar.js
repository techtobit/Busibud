import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
 return (
  <div className='d-flex align-items-center justify-content-center'>
   <Nav
    activeKey="/home"
    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
   >
    <Nav.Item>
     <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
     <Nav.Link eventKey="link-1">Link</Nav.Link>
    </Nav.Item>
    <Nav.Item>
     <Nav.Link eventKey="link-2">Link</Nav.Link>
    </Nav.Item>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
     <NavDropdown.Item href="#action/3.2">
      Another action
     </NavDropdown.Item>
     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
     <NavDropdown.Divider />
     <NavDropdown.Item href="#action/3.4">
      Separated link
     </NavDropdown.Item>
    </NavDropdown>
   </Nav>
  </div>
 );
};

export default NavBar;