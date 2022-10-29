import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import HeroBanner from '../../assets/SvG/Mask Group 1.svg';
// import HeroWave from '../../assets/SvG/Herowaves.svg'
import heroPettern from '../../assets/SvG/pattern.svg'
// import '../../Style/HeroSection.scss';
import '../../Style/Main.scss'

const HeroSection = () => {
 return (
  <section className='hero-banner container-full justify-content-between justify-content-center align-items-center'>
   <div className='hero-content container-full justify-content justify-content-center align-items-center'>
    <Row className="flex-row flex-sm-row-reverse justify-content-center align-content-center align-items-center ">

     <Col className='d-flex align-items-center justify-content-center opacity-98 '>
      <img className='text-center fluid justify-center' src={HeroBanner} alt="" />
     </Col>

     <Col className='hero-tdb'>
      <div className="hero-title">
       <h1 className='title text-uppercase'>
        Let AI handle your all types
        <span className='title-color'> Tech, NoN Tech Problem.</span>
       </h1>
      </div>
      <div className=" text-black">
       <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
        est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
        varius dolor nec bibendum dignissim. Proin in diam a justo
        sollicitudin mattis eu sagittis nunc. In hac habitasse platea dictumst.
       </p>
      </div>
      <div className="hero-btn">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </Col>

    </Row>
   </div>
  </section>
 );
};

export default HeroSection;