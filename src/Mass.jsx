import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Mass() {
  const [grams, setGrams] = useState("");
  const [kg, setKg] = useState("");

  const convertGtoKg = () => {
    setKg(grams / 1000);
  };

  const convertKgtoG = () => {
    setGrams(kg * 1000);
  };

  return (
    <Card className="mb-4 p-3">
      <h5>MASS CONVERSIONS</h5>

      {/* grams to kg */}
      <Row className="align-items-center mb-2">
        <Col>
          <Form.Label>grams (g)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter value"
            value={grams}
            onChange={(e) => setGrams(e.target.value)}
          />
        </Col>

        <Col xs="auto">→</Col>

        <Col>
          <Form.Label>kilograms (kg)</Form.Label>
          <Form.Control type="text" placeholder="Result" value={kg} readOnly />
        </Col>

        <Col xs="auto">
          <Button onClick={convertGtoKg}>Convert</Button>
        </Col>
      </Row>

      <div className="bg-light p-2 mb-3">
        <small><b>FORMULA</b></small><br />
        kg = g / 1000
      </div>

      {/* kg to grams */}
      <Row className="align-items-center mb-2">
        <Col>
          <Form.Label>kilograms (kg)</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter value"
            value={kg}
            onChange={(e) => setKg(e.target.value)}
          />
        </Col>

        <Col xs="auto">→</Col>

        <Col>
          <Form.Label>grams (g)</Form.Label>
          <Form.Control type="text" value={grams} readOnly />
        </Col>

        <Col xs="auto">
          <Button onClick={convertKgtoG}>Convert</Button>
        </Col>
      </Row>

      <div className="bg-light p-2">
        <small><b>FORMULA</b></small><br />
        g = kg × 1000
      </div>
    </Card>
  );
}