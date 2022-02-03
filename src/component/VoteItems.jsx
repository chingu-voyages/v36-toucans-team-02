import React from 'react'
import { Card } from 'react-bootstrap'
import { useState } from 'react';
// import { Route, BrowserRouter} from 'react-router-dom'
import persons from './Content';



// const VotePage = () => {
//     return <div>
//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="#" />
//             <Card.Body>
//                 <Card.Title>Comtent Title</Card.Title>
//                 <Card.Text>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae nihil reiciendis voluptatem excepturi delectus molestias hic aliquam! Unde eius explicabo, ipsa fugiat praesentium voluptatibus accusamus dolore consequatur recusandae deserunt?
//                 </Card.Text>
//             </Card.Body>
//         </Card>
//     </div>;
// };

// export default VotePage;



const VoteItems = () => {
    
    const [ setUp ] = useState(false)
    // const [isLit, setLit] = useState(false)
    const [value, setValue] = useState({})
    const pushUp = ( person ) => {
        setUp(true)
        setValue({ name : person.name,
            friend: person.friend })
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
                    persons.map(choice => (
                        <Card className='mx-2 mb-3' style={{ width: '18rem' }} key={choice.id} onClick={(e) => pushUp( choice )} >
                            <Card.Img variant="top" src={choice.perimg} style={{height: '200px'}}/>
                            <Card.Body>
                                <Card.Title>{choice.name}</Card.Title>
                                <Card.Text className='text1'>{choice.details}</Card.Text>
                                <h6 className='text-danger py-2'>Votes: {choice.votes}</h6>
                                {/* <BrowserRouter>
                                    <Route>Ckick Me</Route>
                                </BrowserRouter> */}
                                
                                               
                            </Card.Body>
                        </Card>    
                    ))
                }
            </div>        
        </div>
    )
}

export default VoteItems
