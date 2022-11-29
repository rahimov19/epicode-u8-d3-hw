import "bootstrap/dist/css/bootstrap.min.css";
import AlertComp from "./components/Alert.jsx";
import "./App.css";

import BookList from "./components/BookList.jsx";
import { Col, Row, Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [isBooklist, setIsBooklist] = useState(true);
  // const [asin, setAsin] = useState("")

  // getAsin = (newBook) => {
  //   this.setState({ asin: newBook });
  // };
  // setBooklist = (BookList) => {
  //   this.setState({
  //     isBooklist: !this.state.isBooklist,
  //   });
  // };

  return (
    <div>
      <AlertComp />
      <Container fluid>
        <Row>
          <Col>
            <button className="mb-3" onClick={setIsBooklist}>
              Show Books
            </button>{" "}
            {isBooklist === true && <BookList />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
