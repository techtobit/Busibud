import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import HeroBanner from '../../../assets/SvG/Mask Group 1.svg'
const HeroSection = () => {
 return (
  <Container className='justify-content-center align-items-center'>
   <Row className="flex-row flex-sm-row-reverse justify-content-center align-content-center align-items-center ">

    <Col className='justify-center align-items-center justify-content-center opacity-90 '>
     <img className='text-center fluid justify-center' src={HeroBanner} alt="" />
    </Col>

    <Col>
     <div className="hero-title">
      <h1 className='fw-bold fs-1'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
     </div>
     <div className="hero-discretion">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
      est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
      varius dolor nec bibendum dignissim. Proin in diam a justo
      sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
     </div>
     <div className="hero-btn">
      <button>Check Pricing</button>
     </div>
    </Col>


   </Row>
  </Container>
 );
};

export default HeroSection;