import { Component } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import History from "../history.json";
import SingleBook from "./SingleBook";
import CommenetArea from "./CommenetArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: "",
    changeSelectedBook: "",
  };
  changeSelectedBook = (newBook) => {
    this.setState({ asin: newBook });
  };
  render() {
    return (
      <Container fluid>
        <Form className="d-flex w-100 mb-4">
          <FormControl
            type="search"
            placeholder="Search for Books"
            className="mr-2"
            aria-label="Search"
            onChange={(e) => this.setState({ searchQuery: e.target.value })}
          />
        </Form>
        <Container>
          <Row>
            <Col>
              {History.slice(0, 20).map((book) => (
                <SingleBook
                  changeSelectedBook={this.changeSelectedBook}
                  Cardimg={book.img}
                  Cardtitle={book.title}
                  Cardtext={book.category}
                  Price={book.price}
                  asin={book.asin}
                  key={book.asin}
                />
              ))}
            </Col>
            <Col>
              <CommenetArea changeSelectedBook={this.state.asin} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default BookList;
