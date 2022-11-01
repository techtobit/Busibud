import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../../Style/Main.scss';

const Footer = () => {
 return (
  <div className='footer '>
   <div className="footer-content sections p-20 ">
    <Row className='footer-links'>
     <Col>
      <p className="links" >About Products</p>
      <p className="links" >Read our blog</p>
      <p className="links" >SingUp & Login</p>
      <p className="links" >Popular Services</p>
     </Col>
     <Col>
      <p className="links" to=''>Terms of use</p>
      <p className="links" to=''>Privacy policy</p>
      <p className="links" to=''>Cookie policy</p>
      <p className="links" to=''>Refund policy</p>
     </Col>
     <Col>
      <img className='footer-paymentImg' src="https://busibud.com/wp-content/uploads/2020/10/Logos.png" alt="" />
     </Col>
    </Row>
    <div className="footer-sub text-center">
     <p>©Copyright || busibud</p>
    </div>
   </div>
  </div>
 );
};

export default Footer;