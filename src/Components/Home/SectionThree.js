import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import waveTwo from '../../assets/s2Wave.svg'
import waveTwo2 from '../../assets/wave2.svg'
import atrWork from '../../assets/png/Artwork 20.png'
import atrWork2 from '../../assets/png/Artwork 22.png'
import atrWork3 from '../../assets/png/Artwork 23.png'
import SectionHeading from '../Shared/SectionHeading/SectionHeading';

const SectionThree = () => {
 return (
  <div className="sectionThree sections"
   style={{
    backgroundImage: `url(${waveTwo})`,
    backgroundPosition: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100%",
    paddingTop: "8%"

   }}
  >
   <SectionHeading>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</SectionHeading>
   
   <Row className='sections-cards sectionThree-Card justify-center justify-content-center'>
    <Col className='cards'>
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
    <Col className='cards'>
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
    <Col className='cards'>
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
 );
};

export default SectionThree;