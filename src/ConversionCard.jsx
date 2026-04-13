import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export function ConversionCard({ title, children }) {
  return (
    <Card className="mx-auto shadow-sm w-100 border-0">
      <Card.Body className="p-4 p-md-5">
        <p className="small text-uppercase text-secondary fw-semibold mb-3">{title}</p>
        <div className="d-grid gap-3">{children}</div>
      </Card.Body>
    </Card>
  );
}

export function ConversionRow({
  fromLabel,
  toLabel,
  inputValue,
  resultValue,
  onInputChange,
  onConvert,
  formula,
}) {
  return (
    <div className="border-bottom rounded-3 p-3 p-md-4">
      <Row className="g-2 align-items-end">
        <Col xs={12} md={5}>
          <Form.Label className="small text-uppercase text-secondary mb-1">{fromLabel}</Form.Label>
          <Form.Control
            type="number"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            placeholder="Enter value"
          />
        </Col>

        <Col xs={12} md={1} className="text-center text-secondary fs-5 fw-semibold">
          &rarr;
        </Col>

        <Col xs={12} md={4}>
          <Form.Label className="small text-uppercase text-secondary mb-1">{toLabel}</Form.Label>
          <Form.Control
            readOnly
            value={resultValue}
            placeholder="Result"
            className="bg-light-subtle"
          />
        </Col>

        <Col xs={12} md={2}>
          <Button className="w-100" onClick={onConvert} variant="outline-dark">
            Convert
          </Button>
        </Col>
      </Row>

      <div className="small text-uppercase text-secondary fw-semibold mt-1 mb-1">Formula</div>
      <Form.Control
        readOnly
        value={formula}
        className="font-monospace text-success-emphasis bg-success-subtle border-success-subtle"
      />
    </div>
  );
}
