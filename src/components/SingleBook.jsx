import { Card } from "react-bootstrap";

const SingleBook = ({ Cardimg, Cardtitle, Cardtext }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Cardimg} />
      <Card.Body>
        <Card.Title>{Cardtitle}</Card.Title>
        <Card.Text>{Cardtext}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
