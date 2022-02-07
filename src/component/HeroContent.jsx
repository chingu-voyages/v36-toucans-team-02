import React from 'react';
import { Button, Container } from 'react-bootstrap';

const HeroContent = () => {
  return (
      <Container id='page-2' >
        <div className='hero-content'>
            <h4 className='fw-bolder'>Hi! I'm Chingu2</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                soluta iste maiores dicta eum, illum ullam accusantium maxime <br />
                blanditiis recusandae dolores alias porro, molestias doloribus
                natus voluptatum expedita vel sed.
            </p>
            <Button className="btn btn-primary btn-lg">Get in Touch</Button>
        </div>


      </Container>
  )
}

export default HeroContent;
