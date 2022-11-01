import React from 'react';
import '../../Style/Main.scss'
import star from '../../assets/png/start.png'
import { Card, Col, Row } from 'react-bootstrap';
import alex from '../../assets/png/alex.png';
import caser from '../../assets/png/cesar.png';
import christiana from '../../assets/png/christiana.png'
import { FaStar, FaAngleRight } from "react-icons/fa";
import arrowIcon from '../../assets/angle-right-solid.svg'
import SectionHeading from '../Shared/SectionHeading/SectionHeading';
const SectionFive = () => {
 return (
  <div className='sectionFive sections'>
   <SectionHeading>What Our Customers Say.</SectionHeading>
   <div className="sections-cards feedback-container">
    <div className="sectionFive-cards position-relative">
     <div className="latest-rating d-flex align-items-center ">
      <img src={star} alt="" />
      <h4 className='lg-p-4 p-2 m-0'>Latest To Rating</h4>
     </div>

     <Row className='sections-cards feedback-cards'>
      {/* feedback card 2  */}
      <Col className='cards'>
       <Card className='sectionFive-card shadow border-0 '>
        <div className="user-data m-0 d-flex algin-items-center">
         <div className="user-avatar">
          <img src={alex} alt="alex" />
         </div>
         <div className="user-info">
          <div className="user_rate m-0 d-flex align-items-center">
           <p className='m-0 fw-bold flex-start'>Jhon Doe</p>
           <div className="rate ">
            <FaStar className='text-warning rate-star' />
            <FaStar className='text-warning rate-star' />
            <FaStar className='text-warning rate-star' />
            <FaStar className='text-warning rate-star' />
           </div>
          </div>
          <div>
           <p className='m-0'>CEO</p>
          </div>
         </div>
        </div>
        <p className='user-feedback'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </p>
       </Card>
      </Col>
      {/* feedback card 2  */}
      <Col className='cards d-none d-lg-block'>
       <Card className='sectionFive-card shadow border-0 '>
        <div className="user-data m-0 d-flex algin-items-center">
         <div className="user-avatar">
          <img src={caser} alt="alex" />
         </div>
         <div className="user-info">
          <div className="user_rate d-flex algin-items-center">
           <p className='m-0 fw-bold flex-start'>Amanda green</p>
           <div className="rate flex-items-end">
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
           </div>
          </div>
          <div>
           <p className='m-0'>Operations Manager</p>
          </div>
         </div>
        </div>
        <p className='user-feedback'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </p>
       </Card>
      </Col>
      {/* feedback card 3  */}
      <Col className='cards d-none d-lg-block'>
       <Card className='sectionFive-card shadow border-0 '>
        <div className="user-data m-0 d-flex algin-items-center">
         <div className="user-avatar">
          <img src={christiana} alt="alex" />
         </div>
         <div className="user-info">
          <div className="user_rate d-flex algin-items-center">
           <p className='m-0 fw-bold flex-start'>Sam Cooper</p>
           <div className="rate flex-items-end">
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
            <FaStar className='text-warning' />
           </div>
          </div>
          <div>
           <p className='m-0'>Customer Service</p>
          </div>
         </div>
        </div>
        <p className='user-feedback'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed commodo
         est.Pellentesque eu placerat mauris. Etiam ut maximus ante. Suspendisse
         varius dolor nec bibendum dignissim. Proin in diam a justo sollicitudin
         mattis eu sagittisnunc. In hac habitasse.
        </p>
       </Card>
      </Col>

     </Row>
     {/* <FaAngleRight className='arrow-btn d-flex justify-content-end' /> */}
     <div className="rounded-circle  arrow-btn position-absolute bottom-0 top-50 end-0">
      {/* <img src={arrowIcon} className="arrow-icon align-middle position-absolute" alt="arrowIcon" /> */}
      <FaAngleRight className='arrow-icon position-absolute' />
     </div>
    </div>
   </div>
  </div>
 );
};

export default SectionFive;