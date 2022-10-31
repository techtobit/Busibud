import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
import FormsOnFire from '../../assets/png/FormsOnFire.png';
import ElectroNeekStudioIDE from '../../assets/png/ElectroNeek.png';
import Jotform from '../../assets/png/Jotform2.png';

const SectionSix = () => {
 return (
  <div className='sectionSix sections'>
   <SectionHeading>Hello this is section Heading</SectionHeading>
   <div className="sections-cards  ">
    <Row className="companies">
     <Col className='text-center company-data'>
      <img src={FormsOnFire} alt="FormsOnFire" />
      <h5>FormsOnFires</h5>
     </Col>
     <Col className='text-center company-data'>
      <img src={ElectroNeekStudioIDE} alt="FormsOnFire" />
      <h5>FormsOnFires</h5>
     </Col>
     <Col className='text-center company-data square-img'>
      <img className='square' src={Jotform} alt="FormsOnFire" />
      <h5>FormsOnFires</h5>
     </Col>
    </Row>
   </div>
  </div>
 );
};

export default SectionSix;