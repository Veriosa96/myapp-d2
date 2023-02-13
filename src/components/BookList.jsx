import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
  };


  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a book</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row>
                {this.props.books
                  .filter((b) =>
                    b.title.toLowerCase().includes(this.state.searchQuery)
                  )
                  .map((b) => (
                    <Col xs={12} md={4} key={b.asin}>
                      <SingleBook book={b} />
                    </Col>
                  ))}
              </Row>
            </Col>
            <CommentArea/>
            <Col>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default BookList;

