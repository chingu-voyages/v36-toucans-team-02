import React from 'react'
import {Button, Card, Container} from 'react-bootstrap'
import { useState } from 'react'


const VoteItems = () => {
    
    const [ setUp ] = useState(false)
    // const [isLit, setLit] = useState(false)
    const [value, setValue] = useState({})
    const rollit = ( person ) => {
        setUp(true)
        setValue({ name : person.name,
            friend: person.friend })
        console.log(person)
        console.log(value.name)
      }

    let persons = [
        {
            id: 1,
            perimg: 'assets/atmosphere.jpg',
            name: 'Green House Effect',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 23
        },
        {
            id: 2,
            perimg: 'assets/designer.jpg',
            name: 'Cameron Williamson',
            details: 'Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s',
            votes: 30
        },
        {
            id: 3,
            perimg: 'assets/github.jpg',
            name: 'Leslie Alexander',
            details: 'Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s',
            votes: 34
        },
        {
            id: 4,
            perimg: 'assets/phones.jpg',
            name: 'Jenny Wilson',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 20
        },
        {
            id: 5,
            perimg: 'assets/stars2.jpg',
            name: 'Marvin McKinney',
            details: 'Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s',
            votes: 23
        },
        {
            id: 6,
            perimg: 'assets/strawberry.jpg',
            name: 'Cameron Williamson',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 30
        },
        {
            id: 7,
            perimg: 'assets/phones.jpg',
            name: 'Guy Hawkins',
            details: 'Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s',
            votes: 34
        },
        {
            id: 8,
            perimg: 'assets/strawberry.jpg',
            name: 'Robert Fox',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 20
        },
        {
            id: 9,
            perimg: 'assets/designer.jpg',
            name: 'Brooklyn Simmons',
             details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 23
        },
        {
            id: 10,
            perimg: 'assets/github.jpg',
            name: 'Arderw Franti',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 30
        },
        {
            id: 11,
            perimg: 'assets/phones.jpg',
            name: 'Veroni Alpha',
            details: 'Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s',
            votes: 34
        },
        {
            id: 12,
            perimg: 'assets/atmosphere.jpg',
            name: 'Astra Complli',
            details: 'Global warming is now popularly used to refer to the concentration of greenhouse gases (carbon dioxide, methane and nitrous oxide), in the atmosphere attributed',
            votes: 20
        },
    ]
    return (

        <Container id='page-3'>
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
                    persons.map(choice => (
                        <Card className='mx-2 mb-3' style={{ width: '18rem' }} key={choice.id} onClick={(e) => rollit( choice )} >
                            <Card.Img variant="top" src={choice.perimg} style={{height: '200px'}}/>
                            <Card.Body>
                                <Card.Title>{choice.name}</Card.Title>
                                <Card.Text className='text1'>{choice.details}</Card.Text>
                                <h6 className='text-danger py-2'>Votes: {choice.votes}</h6>
                                <Button variant="primary">Click Here to Vote</Button>
                            </Card.Body>
                        </Card>    
                    ))
                }
            </div>        
            </div>
        </Container>
    )
}

export default VoteItems
