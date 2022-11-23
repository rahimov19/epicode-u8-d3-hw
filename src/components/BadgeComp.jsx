import { Badge } from "react-bootstrap";

const BadgeComp = ({ color }) => {
  return (
    <div>
      <Badge className={color}>Danger</Badge>
    </div>
  );
};

export default BadgeComp;
