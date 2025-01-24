import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Song } from "./interfaces/Song";
function NuoveUscite() {
  const [song, setSong] = useState<Song[]>([]);

  const GetSongs = async () => {
    try {
      const respons = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen"
      );
      if (respons.ok) {
        const data = await respons.json();
        console.log(data.data);
        setSong(data.data);
      } else {
        throw new Error("dati non recuperati");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  useEffect(() => {
    GetSongs();
  }, []);

  return (
    <Container>
      <Row>
        <h5>Nuove uscite</h5>
      </Row>

      <Row className=" row-cols-3">
        <Col>
          <img src="./src/assets/images/2a.png" className=" w-100" />
          <p style={{ fontSize: "12px" }}>pròlogo con Abuelo</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NuoveUscite;
