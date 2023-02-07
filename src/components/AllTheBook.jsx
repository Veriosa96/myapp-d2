
import {Card, Button, Container, Row} from 'react-bootstrap';
import horror from "../arc/horror.json"

function Books()
 {
  return (
    horror.map((book)=>{
    <Container>
      return(   
         
          <Row md={4}>
      <Card style={{ width: '18rem' }} key={book.asin} className=" mt-3">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.price}</Card.Text>
        <Button className="primary d-flex justify-content-center">Order</Button>
      </Card.Body>
    </Card>
    </Row>
    )</Container>})
    )}

  ;

    
export default Books;