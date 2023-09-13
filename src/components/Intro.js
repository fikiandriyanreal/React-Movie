import { Button, Col, Container, Row } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-align-center d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">Enjoy Your Movie & Chill</div>

            <div className="introButton mt-4 text-center">
              <Button variant="dark">See All</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
