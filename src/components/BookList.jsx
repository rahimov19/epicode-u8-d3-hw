import { Component } from "react";
import { Container, Form, FormControl, Row } from "react-bootstrap";
import History from "../history.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchQuery: "",
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
        <Row>
          {History.filter((book) =>
            book.title.toLowerCase().includes(this.state.searchQuery)
          ).map((book) => (
            <SingleBook
              Cardimg={book.img}
              Cardtitle={book.title}
              Cardtext={book.category}
              Price={book.price}
              key={book.asin}
            />
          ))}
        </Row>
        <Row>
          {History.slice(0, 20).map((book) => (
            <SingleBook
              Cardimg={book.img}
              Cardtitle={book.title}
              Cardtext={book.category}
              Price={book.price}
              key={book.asin}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
