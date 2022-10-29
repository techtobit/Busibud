import React from 'react';
import { Card, Row } from 'react-bootstrap';
import '../../Style/Main.scss';

const SectionTwo = () => {
 return (
  <div className="sectionTwo">
   <div className="section-title text-center">
    <h2>Busidud Upcoming Services</h2>
   </div>

   <div className=' container-full d-grid row justify-between justify-content-center'>

    <Card className='sectionTow-cards'>
     <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
    </Card>

    {/* card two */}
    <Card className='sectionTow-cards'>
     <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
    </Card>


    {/* card three */}
    <Card className='sectionTow-cards'>
     <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
       Some quick example text to build on the card title and make up the
       bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
      <Card.Link href="#">Another Link</Card.Link>
     </Card.Body>
    </Card>
    
   </div>
  </div>
 );
};

export default SectionTwo;