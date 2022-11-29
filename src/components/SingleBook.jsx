import { Container, Col, Row, Card } from "react-bootstrap";
import BadgeComp from "./BadgeComp.jsx";
import CommenetArea from "./CommenetArea.jsx";
import React, { useState } from "react";

export default function SingleBook(props) {
  const [selected, setSelected] = useState(false);
  const [show, setShow] = useState(false);

  function toggleCard() {
    console.log("clikc");
    setSelected(!selected);
    setShow(!show);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <Container>
      <Row className="Column1">
        <Col className="column2">
          <Card
            onClick={(e) => props.changeSelectedBook2(props.asin)}
            style={{
              borderColor: selected ? "red" : "transparent",
            }}
          >
            <Card.Img variant="top" src={props.Cardimg} onClick={toggleCard} />
            <Card.Body>
              <Card.Title>{props.asin}</Card.Title>
              <Card.Text>{props.Cardtext}</Card.Text>
              <BadgeComp color="bg-danger" price={props.Price}></BadgeComp>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <CommenetArea
            cardTitle={props.Cardtitle}
            handleClose={handleClose}
            show={show}
            asin={props.asin}
          />
        </Col>
      </Row>
    </Container>
  );
}
