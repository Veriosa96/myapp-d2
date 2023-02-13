import { Component } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Card
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
        className="my-3"
      >
        <Card.Img
          style={{ height: "20em" }}
          variant="top"
          src={this.props.book.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
          {this.state.selected}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
