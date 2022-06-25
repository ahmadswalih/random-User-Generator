import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./MyCard";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchDetails = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    const response = data.results[0];
    console.log(response);
    setDetails(response);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <MyCard details={details} />
        </Col>
      </Row>
      <Button
        onClick={() => window.location.reload()}
        size="md"
        color="warning"
        className="text-center mt-2  refresh"
      >
        Get Another User
      </Button>
    </Container>
  );
};

export default App;
