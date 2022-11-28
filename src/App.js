import "bootstrap/dist/css/bootstrap.min.css";
import AlertComp from "./components/Alert.jsx";
import "./App.css";

import BookList from "./components/BookList.jsx";
import { Col, Row, Container } from "react-bootstrap";

import { Component } from "react";

class App extends Component {
  state = {
    isBooklist: true,
    asin: "",
  };
  getAsin = (newBook) => {
    this.setState({ asin: newBook });
  };
  setBooklist = (BookList) => {
    this.setState({
      isBooklist: !this.state.isBooklist,
    });
  };

  render() {
    return (
      <div>
        <AlertComp />
        <Container>
          <Row>
            <Col>
              <button className="mb-3" onClick={this.setBooklist}>
                Show Books
              </button>{" "}
              {this.state.isBooklist === true && <BookList />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
