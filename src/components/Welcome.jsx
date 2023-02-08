
import Card from 'react-bootstrap/Card';

function BasicExample(prop) {
  return (
    <Card className="mt-5 bg-success w-100% mx-5" >
      <Card.Body>
        <Card.Title className="text-center text-warning"><h1> {prop.MainTitle}</h1></Card.Title>
        <Card.Text className="text-center mx-5"> <h5 className='text-danger'>{prop.BodyJumbotronCard}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;