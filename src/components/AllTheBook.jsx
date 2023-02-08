
import {Card, Button, Col, Row} from 'react-bootstrap';
import horror from "../arc/horror.json"

function Books(){
  console.log(horror)
  
  return (
  <Row className='ms-5 '>
    {horror.map((book) => {
    return(   
        <Col  xs={12} md={6} lg={3} key={book.asin}>
      <Card style={{ width: '18rem', height:"30rem" }} className="book-cover mt-5 ">
      <Card.Img variant="top" style={{height:"65%"}} src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Button className="primary d-flex justify-content-center">Order</Button>
      </Card.Body>
    </Card>
    </Col>
    )
    })}
    </Row>
    )}

  

    
export default Books;