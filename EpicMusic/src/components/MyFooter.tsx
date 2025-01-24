import { Container, Row } from "react-bootstrap";

function MyFooter() {
  return (
    <Container fluid style={{ backgroundColor: "#323232" }} className="mt-5">
      <Row className=" bg-transparent">
        <p className=" bg-transparent mt-3">
          Italia{" "}
          <span className="text-secondary bg-transparent">| English (UK)</span>
        </p>
      </Row>
      <Row className=" bg-transparent">
        <p className=" bg-transparent">
          <span className="text-secondary bg-transparent">
            Copyright © 2024{" "}
          </span>{" "}
          Apple Inc.{" "}
          <span className="text-secondary bg-transparent">
            Tutti i diritti risevati.
          </span>
          <br />
          Condizioni dei servizi internet
          <span className="text-secondary bg-transparent"> | </span>
          Apple Music e privacy{" "}
          <span className="text-secondary bg-transparent"> | </span>Avviso sui
          coockie <span className="text-secondary bg-transparent"> | </span>
          Supporto <span className="text-secondary bg-transparent"> | </span>
          Feedback
        </p>
      </Row>
    </Container>
  );
}

export default MyFooter;
