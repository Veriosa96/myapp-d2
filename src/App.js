import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import { Container } from 'react-bootstrap'
import Footer from "./components/MyFooter";
import fantasy from "./arc/fantasy.json";
import BookList from "./components/BookList";


class App extends Component {
state= {
  comments : []
}
setComments = value => {
  this.setState({comments: value})
}

  render() {
  return (
    <Container>
      <NavBar />
      <Welcome />
      <BookList books={fantasy} comments={this.state.comments} />
      <Footer />
    </Container>
  )
}
}

export default App

