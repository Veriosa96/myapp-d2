
import {Card, Button,} from 'react-bootstrap';
import horror from "../arc/horror.json"

function Books()
 {
  return (
    {horror.map((book)=>{
      return(    <Card style={{ width: '18rem' }} key={horror.asin}>
      

      <Card.Img variant="top" src={horror.img} />
      <Card.Body>
        <Card.Title>{horror.title}</Card.Title>
        <Card.Text>{horror.price}</Card.Text>
        <Button variant="primary d-flex justify-content-center">Order</Button>
      </Card.Body>
    </Card>)})
    })}

  ;

    
export default Books;