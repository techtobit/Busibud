import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../Style/Main.scss';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';

const SectionTwo = () => {
 return (
  <div className="sectionTwo sections">
   <SectionHeading>Lorem ipsum dolor sit amet,consectetur adipiscing elit.</SectionHeading>
   <Row className='sections-cards'>
    <Col className='cards'>
     <Card className='sectionTow-card shadow rounded-3 border-0 text-center'>
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
     <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
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
     <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
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

export default SectionTwo;