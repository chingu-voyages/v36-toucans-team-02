import React from 'react';
import {Row} from 'react-bootstrap';
import Addtopics from './Addtopics';

const FooterCom = () => {
  return <footer id='page-4' className='main-footer'>
    <div className="container">
      <div className='footer-head py-4'>
        <Addtopics />
        {/* <button className='button-blue'>Create Poll</button> */}
        <button className='button-white but2'>Email us</button>
      </div>

      <Row>
        <div className='col-md-4 col-sm-12'>
          <h2>Services</h2>
          <ul className='list-unstyled'>
            <li className=''>Vote Recording</li>
            <li>Voter Verificataion</li>
            <li>Transparent Voting</li>
          </ul>
        </div>

        <div className='col-md-4 col-sm-12'>
          <h2>Contact Us</h2>
          <ul className='list-unstyled text-start'>
            <li>Product-team</li>
            <li>Design-team</li>
            <li>Developer-team</li>
          </ul>
        </div>

        <div className='col-md-4 col-sm-12'>
          <h2>App Review</h2>
          <ul className='list-unstyled text-start'>
            <li>Poll Organisation</li>
            <li>Voters</li>
            <li>Vote Observers</li>
          </ul>
        </div>
      </Row>
      {/* footer-last-section */}
      <section className="text-muted text-center copyright my-4">
        <small>
          &copy;{new Date().getFullYear()} Toucans Vote.
          All Rights Reserved.
        </small>
      </section>
    </div>

  </footer>;
};

export default FooterCom;
