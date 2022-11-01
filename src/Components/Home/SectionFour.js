import React from 'react';
import saveMoney from '../../assets/png/save-money.png';
import accuracy from '../../assets/png/accuracy.png';
import hireing from '../../assets/png/hiring.png';
import moneyBack from '../../assets/png/money-back.png';

import '../../Style/Main.scss';
import SectionHeading from '../Shared/SectionHeading/SectionHeading';


const SectionFour = () => {
 return (
  <div className='sectionFour sections'>
   <SectionHeading>Worried about sourcing smart agents?</SectionHeading>
   <div className="sectionFour-data sections-cards">
    {/* data container 01 */}
    <div className="left-section d-flex justify-start justify-content-start">
     <div className="data">
      <div className="data-heading d-flex align-items-center">
       <img src={saveMoney} alt="" />
       <h4 className='dataTitle'>
        Lorem ipsum dolor sit .
       </h4>
      </div>
      <p className="data-description">
       adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
      </p>
      <div className="hero-btn lg-pt-4 pt-3">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </div>
    </div>

    {/* data container 02 */}
    <div className="right-section d-flex justify-end justify-content-end">
     <div className="data">
      <div className="data-heading d-flex align-items-center">
       <img src={accuracy} alt="" />
       <h4 className='dataTitle'>
        Lorem ipsum dolor sit .
       </h4>
      </div>
      <p className="data-description">
       adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
      </p>
      <div className="hero-btn lg-pt-4 pt-3">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </div>
    </div>

    {/* data container 03 */}
    <div className="left-section d-flex justify-start justify-content-start">
     <div className="data">
      <div className="data-heading d-flex align-items-center">
       <img src={hireing} alt="" />
       <h4 className='dataTitle'>
        Lorem ipsum dolor sit .
       </h4>
      </div>
      <p className="data-description">
       adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
      </p>
      <div className="hero-btn lg-pt-4 pt-3">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </div>
    </div>

    {/* data container 04 */}
    <div className="right-section d-flex justify-end justify-content-end">
     <div className=" data">
      <div className="data-heading d-flex align-items-center">
       <img src={moneyBack} alt="" />
       <h4 className='dataTitle'>
        Lorem ipsum dolor sit .
       </h4>
      </div>
      <p className="data-description">
       adipiscing elit. Ut sed commodo est.Pellentesque eu placerat mauris. ut maximus ante. Suspendisse varius dolor nec bibendum dignissim
      </p>
      <div className="hero-btn lg-pt-4 pt-3">
       <button className='rounded-pill border-0'>Check Pricing</button>
      </div>
     </div>
    </div>

   </div>
  </div>
 );
};

export default SectionFour;