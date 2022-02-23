import React from 'react';
import {  Container } from 'react-bootstrap';
import Addtopics from './Addtopics';

const HeroContent = () => {
  return (
      <Container id='page-2' >
        <div className='hero-content mx-5 text-pri'>
            <h4 className='fw-bolder fs-1'>Hi! I'm Chingu2</h4>
            <p className='hero-text fs-4 text-pri'>
            Welcome to Our Voting App With Host of Topics Created by Users.
            <br />You can share your feelings with a vote.
            <br />All Users can Vote...
              {/* Click <a href="https://docs.google.com/forms/d/e/1FAIpQLScR7T-FxFHz5nW8EnOLXJAYgxkbWd5G_6oRHYQg8CgEMPRTPQ/viewform?usp=sf_link">here</a> to give a feedback about our app. */}
            </p>
            <Addtopics />
            {/* <Button className="btn btn-primary">Get in Touch</Button> */}
        </div>


      </Container>
  )
}

export default HeroContent;
