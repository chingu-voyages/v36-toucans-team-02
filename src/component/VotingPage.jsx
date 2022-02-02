import React from "react";
import { Card, Button } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton'



function VotingPage({image, name, details, votes, setShow}) { 

  const handleClick = () => {
    setShow(false)
  }
  
  // const [ person, setState ] = useState([persons])

  return (
    
      <div className="border border-2 rounded m-5 bg-white">
      {/* <h1 className="text-center text-primary">Astra Complli</h1> */}
      <div className="d-flex justify-content-end"><CloseButton  onClick={handleClick}/></div> 
      
          <div className="" >
                <div className="row">
                  <div className="col-md-5 ps-5 pt-5  m-auto">
                  <Card className="bg-dark text-white " style={{ width: "40rem" }}>
                      <Card.Img src={image} alt="Card image" />
                      <Card.ImgOverlay>
                        <Card.Title className="text-center text-primary">{name}</Card.Title>
                        <Card.Text>
                        This is a public topic
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                  <div className="col-md-2 m-auto">
                    <Button variant="primary" size="lg" className="button-blue rounded-pill">
                      Vote
                    </Button>{" "}
                    <h6 className='text-danger py-2 px-5'>Votes: {votes}</h6>
                  </div>
                </div>
                <div className="row">
                    <div className="col-md-10 m-auto  py-5 fs-5 ">
                    <p className="text-center col-md-10">
                    {details}
                </p>
                {/* <Button pill variant="primary" size="lg" className="m-auto mb-5 d-flex align-items-center rounded-pill">
                      Vote More Topics 
                    </Button>{" "} */}
                   </div>
                </div>
                </div>
    </div>
    
    
            
  );
};

export default VotingPage;
