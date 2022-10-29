import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import waveTwo from '../../assets/s2Wave.svg'
import waveTwo2 from '../../assets/wave2.svg'
import atrWork from '../../assets/png/Artwork 20.png'
import atrWork2 from '../../assets/png/Artwork 22.png'
import atrWork3 from '../../assets/png/Artwork 23.png'

const SectionThree = () => {
 return (
  <div className="sectionTwo"
   style={{
    backgroundImage: `url(${waveTwo})`,
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100%",
    paddingTop: "16%"

   }}
  >
   <div className="sectionThree-title text-center">
    <h2 className='title-text'>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</h2>
   </div>

   <div className='section-cards sectionThree-Card container-full row justify-center justify-content-center'>
    <Row>
     <Col>
      <Card className='sectionTow-card bg-transparent  border-0'>
       <Card.Img className='cardImg' variant="top" src={atrWork} />
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className='sectionTow-card bg-transparent border-0 '>
       <Card.Img className='cardImg' variant="top" src={atrWork2} />
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
     <Col>
      <Card className='sectionTow-card bg-transparent border-0 '>
       <Card.Img className='cardImg' variant="top" src={atrWork3} />
       <Card.Body>
        <Card.Subtitle className='card-subtitle fw-bold py-3'>Lorem ipsum dolor sit .</Card.Subtitle>
        <Card.Text className='card-text'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </Card.Text>
       </Card.Body>
      </Card>
     </Col>
    </Row>
   </div>
  </div>
 );
};

export default SectionThree;