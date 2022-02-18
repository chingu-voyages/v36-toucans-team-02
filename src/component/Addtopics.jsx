
import React from "react";
import { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";


const Addtopics = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mb-5">
      <div>
        <Button className=" button-white  " onClick={handleShow}>Create Poll</Button>
      </div>
      <Modal className="add" show={show} onHide={handleClose} animation={false}>
        {/* <Modal.Header closeButton> */}
        <Modal.Title className="pheader mx-5 my-3 display-6 fw-bold">
          Poll
        </Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body>
          <Form action="" method="post">
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label className="ptitle">Image</Form.Label>
              <Form.Control
                type=""
                placeholder=""
                className="border-0 bg-light text-dark"
              />
              <Form.Text className="text-muted">
                Paste the URL of a JPG or PNG of max 20 kb
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="formBasicEmail">
              <Form.Label className="ptitle">Tittle</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className="border-0 bg-light text-dark"
              />
            </Form.Group>
            <Form.Group
              className="mb-3 mx-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ptitle">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                className="border-0 bg-light text-dark"
              />
            </Form.Group >
            <Form.Group
              className="mb-3 mx-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="ptitle">Chose Category</Form.Label>
              <Form.Select className="border-0 bg-light text-dark" aria-label="Floating label select example">
                <option>Space Travel</option>
                <option value="1"> Nature</option>
                <option value="2">Politics</option>
                <option value="3">Music</option>
                <option value="3">Movies</option>
                <option value="3">Sports</option>
              </Form.Select>
              </Form.Group >
          </Form>
        </Modal.Body>
        {/* <Modal.Footer> */}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end m-3">
          <Button
            variant="secondary"
            className="button-white but  me-md-2"
            type="submit"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            className="button-white but "
            type="submit"
            onClick={handleClose}
          >
            Create Poll
          </Button>
        </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default Addtopics;
