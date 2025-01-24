import { Col, Container, Row } from "react-bootstrap";
import NuoveUscite from "./NuoveUscite";
import Altro from "./altro";

function Body() {
  return (
    <>
      <Container>
        <Row>
          <h1 className=" border-bottom border-secondary">Novità</h1>
        </Row>
      </Container>
      <Container>
        <Row xs={2}>
          <Col>
            <p className="text-secondary" style={{ fontSize: "11px" }}>
              NUOVA STAZIONE RADIO
            </p>
            <p>Rilassati, al resto pensiamo noi. Ascolta Apple music chill</p>
          </Col>
          <Col>
            <p className="text-secondary" style={{ fontSize: "11px" }}>
              NUOVA STAZIONE RADIO
            </p>
            <p>Ecco la nuova casa della musica latina</p>
          </Col>
          <Col>
            <img src="./src/assets/images/1a.png" className=" w-100" />
          </Col>
          <Col>
            <img src="./src/assets/images/1b.png" className=" w-100" />
          </Col>
        </Row>
      </Container>
      <Container className=" mt-5">
        <Row>
          <h5>Nuovi episodi radio</h5>
        </Row>
        <Row>
          <Col>
            <img src="./src/assets/images/2a.png" className=" w-100" />
            <p style={{ fontSize: "12px" }}>pròlogo con Abuelo</p>
          </Col>
          <Col>
            <img src="./src/assets/images/2b.png" className=" w-100" />
            <p style={{ fontSize: "12px" }}>The wanderer</p>
          </Col>
          <Col>
            <img src="./src/assets/images/2c.png" className=" w-100" />
            <p style={{ fontSize: "12px" }}>Michael Bublé & Carly Pearce</p>
          </Col>
        </Row>
      </Container>
      <NuoveUscite />
      <Altro />
    </>
  );
}

export default Body;
