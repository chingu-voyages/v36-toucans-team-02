import React from 'react';
import { Button, Container } from 'react-bootstrap';

const HeroContent = () => {
  return (
      <Container id='page-2' >
        <div className='hero-content mx-5 text-white'>
            <h4 className='fw-bolder'>Hi! I'm Chingu2</h4>
            <p className='hero-text'>
              Click <a href="https://docs.google.com/forms/d/e/1FAIpQLScR7T-FxFHz5nW8EnOLXJAYgxkbWd5G_6oRHYQg8CgEMPRTPQ/viewform?usp=sf_link">here</a> to give a feedback about our app.
            </p>
            <Button className="btn btn-primary">Get in Touch</Button>
        </div>


      </Container>
  )
}

export default HeroContent;
