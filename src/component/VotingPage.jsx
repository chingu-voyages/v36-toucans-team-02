import React from "react";
import { Card, Button, Modal, CloseButton } from "react-bootstrap";
import { useState } from "react";

function VotingPage(props) {
  let { image, name, details, show, setShow, fullscreen } = props;

  const [count, setCount] = useState(0);

  const incrementVoteCount = () => {
    setCount((persons) => persons + 1);
  };

  const handleClick = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <div className="d-flex justify-content-end mx-5 my-4">
          <CloseButton onClick={handleClick} />
        </div>
        <Modal.Body>
          <div className="">
            <div className="row">
              <h2 className="mt-2 text-center text-info d-sm-block d-md-none ">
                {name}
              </h2>
              <div className="col-md-5 ps-5 pt-5  m-auto" sm={4}>
                <Card
                  className="img-size-sm bg-dark text-white "
                  style={{ width: "40rem" }}
                >
                  <Card.Img src={image} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title className="text-center text-primary"></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </div>
              <div className="col-md-3 col-sm-4 m-auto det-vote text-center">
                <h2 className="mt-5 text-info d-none d-md-block ">{name}</h2>
                <p className="text-black-50 fs-5 mt-3 ">
                  This is a public topic
                </p>
                <p className="text-black-50 fs-6 fst-italic ">
                  Last updated 3 mins ago
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  className="button-blue rounded-pill align-self-center"
                  onClick={incrementVoteCount}
                >
                  Vote
                </Button>{" "}
                <h6
                  className="text-danger py-2 px-5 text-center"
                  id="votecount"
                >
                  Votes count: {count}
                </h6>
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
