import React from 'react'
import {Button, Card } from 'react-bootstrap'
import persons from './Content'
import { useState } from 'react'
import VotingPage from './VotingPage'
// import { Link } from 'react-router-dom'




const VoteItems = () => {
    
    const [ show, setShow ] = useState(false)
    // const [isLit, setLit] = useState(false)
    const [value, setValue] = useState({})
    const rollit = (e, person ) => {
        setShow(true)
        setValue({ 
            name : person.name,
            details: person.details,
            image: person.perimg,
            votes: person.votes
         })
        console.log(person)
        console.log(value.name)
      }

    
    return (
        <div className='text-center'>
            {/* <div className="d-flex flex-wrap Justify-content-center p-5">
                {
                    persons.map(person => (
                        <div className="berry1 mx-2" key={person.id} onClick={(e) => rollit( person )}>
                            <div className="text-center"><img src={person.perimg} alt="" className="image1"/></div>
                            <h5 className="px-2">{person.name}</h5>
                            <h6 className="px-2">Friends: {person.friend}</h6>
                            <Button>See Details Vote</Button>
                        </div>
                        
                    ))
                }
            </div> */}
            <h3 className='blog-heading'>Blog Post</h3>
            <div className='dispaly-card p-4 d-flex flex-wrap'>
                
                {
                    persons.map(person => (
                        <Card className='mx-2 mb-3' style={{ width: '18rem' }}  >
                            <Card.Img variant="top" src={person.perimg} style={{height: '200px'}}/>
                            <Card.Body>
                                <Card.Title>{person.name}</Card.Title>
                                <Card.Text className='text1'>{person.details}</Card.Text>
                                <h6 className='text-danger py-2'>Votes: {person.votes}</h6>
                                <Button variant="primary" key={person.id} onClick={(e) => rollit(e, person )}>Click to vote</Button>
                                {/* <Link to={`/VotingPage/${choice.id}`} className="btn btn-primary">Click to vote</Link> */}
                            </Card.Body>
                        </Card>    
                    ))
                }
                 {     
                   show && <VotingPage image={value.image} name={value.name} details={value.details} votes={value.votes} setShow={setShow}/>
                  
              }
            </div>        
        </div>
    )
}

export default VoteItems