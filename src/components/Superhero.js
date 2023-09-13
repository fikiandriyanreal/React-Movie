import { Card, Container, Row, Col, Image } from "react-bootstrap";
import sawImage from "../assets/images/saw.jpg";
import thenunImage from "../assets/images/the nun.jpg";
import granImage from "../assets/images/gran.jpg";
import strayImage from "../assets/images/stray.jpg";
import teenageImage from "../assets/images/teenage.jpg";
import blueImage from "../assets/images/blue.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white"> SUPERHERO MOVIES </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="  text-white  movieImage">
              <Image src={sawImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Saw</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="  text-white  movieImage">
              <Image src={thenunImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Nun</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white  movieImage">
              <Image src={granImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Gran Turismo</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className=" text-white  movieImage">
              <Image src={strayImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Slum Dogs</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="  text-white  movieImage">
              <Image src={teenageImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Teenage Mutant
                  </Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white  movieImage">
              <Image src={blueImage} alt="Card Fight" className="images" />
              <div className="bg-dark ">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Blue Beetle</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Superhero;
