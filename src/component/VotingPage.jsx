import React from "react";
import { Card, Button, Modal } from "react-bootstrap";



function VotingPage({
    image,
    name,
    details,
    votes,
    show,
    topic,
    setShow,
    fullscreen,
    incrementVoteCount,
  }) {
  

  return (
    <>
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="">
        <div className="row">
          <div className="col-md-5 ps-5 pt-5  m-auto">
            <Card className="bg-dark text-white " style={{ width: "40rem" }}>
              <Card.Img src={image} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title className="text-center text-primary"></Card.Title>
              </Card.ImgOverlay>
            </Card>
          </div>
          <div className="col-md-3 m-auto">
            <h2 className="mt-5 text-info">{name}</h2>
            <p className="text-black-50 fs-5">This is a public topic</p>
            <p className="text-black-50 fs-6 fst-italic">
              Last updated 3 mins ago
            </p>
            <Button
              variant="primary"
              size="lg"
              className="button-blue rounded-pill"
              onClick={(e) => incrementVoteCount( votes.id)}
            >
              Vote
            </Button>{" "}
            <h6 className="text-danger py-2 px-5">Votes count: {votes}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10 m-auto  py-5 fs-5 ">
            <p className="text-center col-md-10">{details}</p>
          </div>
        </div>
      </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VotingPage;