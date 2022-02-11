import React from 'react'
import {Button, Card, Container} from 'react-bootstrap'
import persons from './Content'
import { useState, useEffect } from 'react'
import VotingPage from './VotingPage'



const VoteItems = () => {
    
    const [ show, setShow ] = useState(false)
    const [value, setValue] = useState({})

    

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);

    function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  
  const [person, setPersons] = useState([]);

  useEffect(() => {
    setPersons(persons);
}, []);

    function incrementVoteCount(personId) {
        persons = persons.map((person) => {
            if (person._id === personId) {
                person.votes = person.votes + 1; 
            }
            return person;
        });
        setPersons(person);
    }

    const rollit = (e, person ) => {
        setShow(true)
        setValue({ 
            name : person.name,
            details: person.details,
            image: person.perimg,
            votes: person.votes,
            id: person.id
         })
        console.log(person)
        console.log(value.name)
      }

      
    return (
        <Container id='page-3' className="text-center">
            <div className="text-center pt-5">
                <h3 className="blog-heading text-white">Blog Post</h3>
                <div className=" d-flex flex-wrap">
                {persons.map((person) => (
                    <Card className="mx-2 mb-3 vote-card">
                    <Card.Img
                        variant="top"
                        src={person.perimg}
                        style={{ height: "200px" }}
                    />
                    <Card.Body>
                        <Card.Title>{person.name}</Card.Title>
                        {/* <Card.Text className="text1">{person.details}</Card.Text> */}
                        <h6 className="text-danger py-2">Votes: {person.votes}</h6>
                        <Button variant="primary" key={person.id} onClick={(e) => rollit(e, person )}>Click to vote</Button>
                    </Card.Body>
                    </Card>
                ))}
                {show && (
                    <VotingPage
                    handleShow={handleShow}
                    values={values}
                    show={show}
                    fullscreen={fullscreen}
                    image={value.image}
                    name={value.name}
                    id={value.id}
                    details={value.details}
                    votes={value.votes}
                    topic={persons}
                    setShow={setShow}
                    incrementVoteCount={(personId) => incrementVoteCount(personId)}
                    />
                )}
                </div>
            </div>

        </Container>
    );
}

export default VoteItems