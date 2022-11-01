import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import '../../Style/Main.scss';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';

const SectionTwo = () => {
 return (
  <div className="sectionTwo sections">
   <SectionHeading>The new standard in operations management</SectionHeading>
   <Row className='sections-cards'>
    <Col className='cards'>
     <Card className='sectionTow-card shadow rounded-3 border-0 text-center'>
      <Card.Body>
       <Card.Subtitle className='card-subtitle fw-bold py-3'>Automated Testing</Card.Subtitle>
       <Card.Text className='card-text'>
        Our smart chat bots test a variety of applicants on YOUR process.
        They test them out in a simulated environment, score them and give
        you the results, so that you only choose the person
        who answers your chats, your calls and your emails the best.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col className='cards'>
     <Card className='sectionTow-card shadow rounded-3     border-0 text-center'>
      <Card.Body>
       <Card.Subtitle className='card-subtitle fw-bold py-3'>Automated Training</Card.Subtitle>
       <Card.Text className='card-text'>
        During the onboarding phase, you won’t need a full time trainer to
        help the agents with the training. Our AI turns them into
        complete cyborgs and it automatically doles out smart suggestions.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
    <Col className='cards'>
     <Card className='sectionTow-card shadow rounded-3 border-0 text-center'>
      <Card.Body>
       <Card.Subtitle className='card-subtitle fw-bold py-3'>Automated Management</Card.Subtitle>
       <Card.Text className='card-text'>
        Worrying about agent quality and agent productivity is a thing of the past.
        We’ve built out automated tools to keep the agent performance in check.
       </Card.Text>
      </Card.Body>
     </Card>
    </Col>
   </Row>
  </div>
 );
};

export default SectionTwo;