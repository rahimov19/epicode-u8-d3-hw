import { Card } from "react-bootstrap";
import BadgeComp from "./BadgeComp.jsx";

const SingleBook = ({ Cardimg, Cardtitle, Cardtext, Price }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Cardimg} />
      <Card.Body>
        <Card.Title>{Cardtitle}</Card.Title>
        <Card.Text>{Cardtext}</Card.Text>
        <BadgeComp color="bg-danger" price={Price}></BadgeComp>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
