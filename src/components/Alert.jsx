import { Alert } from "react-bootstrap";

const AlertComp = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Welcome To Books Shop </Alert.Heading>
      <p>
        Our books are really booked! Just read and u'll find it that there is no
        booked books like our books!
      </p>
    </Alert>
  );
};

export default AlertComp;
