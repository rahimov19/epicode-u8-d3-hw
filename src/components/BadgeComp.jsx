import { Badge } from "react-bootstrap";

const BadgeComp = ({ color, price }) => {
  return (
    <div>
      <Badge className={color}>{price}$</Badge>
    </div>
  );
};

export default BadgeComp;
