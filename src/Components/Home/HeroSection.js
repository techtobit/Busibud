import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import HeroBanner from '../../assets/SvG/Mask Group 1.svg';
import HeroWave from '../../assets/wave.svg';
import '../../Style/Main.scss'

const HeroSection = () => {
 return (
  <section className='hero-banner container-full justify-content-between justify-content-center align-items-center'
   style={{
    backgroundImage: `url(${HeroWave})`,
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100%",

   }}
  >
   <div className='hero-content sections container-full justify-content justify-content-center align-items-center'>
    <Row className=" gridRow flex-row flex-sm-row-reverse justify-content-center align-content-center align-items-center ">

     <Col className='heroBannerBlock d-flex align-items-center justify-content-center opacity-98 '>
      <img className='heroBannerBlob  text-center fluid justify-center ' src={HeroBanner} alt="" />
     </Col>

     <Col className='hero-tdb '>
      <div className="hero-title">
       <h1 className='title text-uppercase'>
        Let AI handle your all types
        <span className='title-color'> Tech, NoN Tech Problem.</span>
       </h1>
      </div>
      {/* <div className=" text-black pt-6"> */}
      <p className='pt-3 text-black'>
       Busibud offers the world’s first AI enabled, fully automated customer
       service suite. Our automated technology helps you save over 50% on
       your support costs by letting cyborgs handle support with a high
       level of accuracy.
      </p>
      {/* </div> */}
      <div className="hero-btn pt-4">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </Col>
    </Row>
   </div>
  </section>
 );
};

export default HeroSection;