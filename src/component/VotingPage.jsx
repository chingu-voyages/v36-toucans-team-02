import React from "react";
import { Card, Button } from "react-bootstrap";

const VotingPage = () => {
  return (
    <div className="border border-2 rounded m-5">
      {/* <h1 className="text-center text-primary">Astra Complli</h1> */}
      <div className="row">
        <div className="col-md-5 ps-5 pt-5  m-auto">
          <Card className="bg-dark text-white " style={{ width: "40rem" }}>
            <Card.Img src="..\assets\atmosphere.jpg" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className="text-center text-primary">Astra Complli</Card.Title>
              <Card.Text>
              THis topic is very essential to the uderstanding of the ecosystem
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-md-2 m-auto">
          <Button variant="primary" size="lg">
            Vote
          </Button>{" "}
          <h6 className='text-danger py-2'>Votes: 20</h6>
        </div>
      </div>
      <div className="row">
          <div className="col-md-10 m-auto  pt-5 fs-5">
          <p className="text-center col-md-10">
        Global warming is now popularly used to refer to the concentration of
        greenhouse gases (carbon dioxide, methane and nitrous oxide), in the
        atmosphere attributed
      </p>
      <Button variant="primary" size="lg" className="m-auto mb-5 d-flex align-items-center">
            Vote More Topics 
          </Button>{" "}
          </div>
      </div>
    </div>
  );
};

export default VotingPage;
