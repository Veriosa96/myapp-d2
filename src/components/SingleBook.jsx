import Card from"react-bootstrap/Card"
import React from "react"


function SingleBook (prop) {
    
    return (
        <div class="col " >
        <Card style={{ width: '18rem' }}className="book-cover mt-5 "xs={12} md={6} lg={3}>
        <Card.Img variant="top" src={prop.book.img} />
        <Card.Body>
        <Card.Title>{prop.book.title}</Card.Title>
        </Card.Body>
        </Card>
        </div>


    
    )
}
    


export default SingleBook