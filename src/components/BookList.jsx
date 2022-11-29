/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import History from "../history.json";
import SingleBook from "./SingleBook";

function BookList(changeSelectedBook2) {
  const [searchQuery, setSearchQuery] = useState("");
  const [changeSelectedBook, setChangeSelectedBook] = useState("");

  // eslint-disable-next-line no-redeclare
  function changeSelectedBook2(newBook) {
    setChangeSelectedBook({ asin: newBook });
  }
  console.log(History);
  return (
    <Container fluid>
      <Form className="d-flex w-100 mb-4">
        <FormControl
          type="search"
          placeholder="Search for Books"
          className="mr-2"
          aria-label="Search"
          onChange={(e) => setSearchQuery({ searchQuery: e.target.value })}
        />
      </Form>
      <Container fluid>
        <Row>
          <Col>
            {History.slice(0, 20).map((book) => (
              <SingleBook
                changeSelectedBook2={changeSelectedBook2}
                Cardimg={book.img}
                Cardtitle={book.title}
                Cardtext={book.category}
                Price={book.price}
                asin={book.asin}
                key={book.asin}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default BookList;
