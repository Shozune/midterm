import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Volume() {
    const [liters1, setLiters1] = useState("");
    const [ml1, setMl1] = useState("");

    const [ml2, setMl2] = useState("");
    const [liters2, setLiters2] = useState("");

    const [ml3, setMl3] = useState("");
    const [ul3, setUl3] = useState("");

    const [cm3, setCm3] = useState("");
    const [ml4, setMl4] = useState("");

    const [liters5, setLiters5] = useState("");
    const [dm3, setDm3] = useState("");

    const lToMl = () => {
        setMl1(liters1 === "" ? "" : liters1 * 1000);
    };

    const mlToL = () => {
        setLiters2(ml2 === "" ? "" : ml2 / 1000);
    };

    const mlToUl = () => {
        setUl3(ml3 === "" ? "" : ml3 * 1000);
    };

    const cm3ToMl = () => {
        setMl4(cm3 === "" ? "" : cm3 * 1);
    };

    const lToDm3 = () => {
        setDm3(liters5 === "" ? "" : liters5 * 1);
    };

    return (
        <Form className="mb-4 p-3 border rounded bg-light">
            <h6 className="mb-3">VOLUME CONVERSIONS</h6>

            <Form.Group className="mb-3 pb-2 border-bottom">
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <Form.Label>liters (L)</Form.Label>
                        <Form.Control
                            type="number"
                            value={liters1}
                            onChange={(e) => setLiters1(e.target.value)}
                            placeholder="Enter value"
                        />
                    </div>
                    <div className="col-auto text-center pb-2">&rarr;</div>
                    <div className="col-md-4">
                        <Form.Label>milliliters (mL)</Form.Label>
                        <Form.Control
                            type="number"
                            value={ml1}
                            placeholder="Result"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-auto">
                        <Button className="bg-white text-black border-secondary" onClick={lToMl}>Convert</Button>
                    </div>
                </div>
                <small className="d-block mt-2 text-uppercase">FORMULA</small>
                <div className="alert alert-success" role="alert">
                    mL = L × 1000
                </div>
            </Form.Group>

            <Form.Group className="mb-3 pb-2 border-bottom">
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <Form.Label>milliliters (mL)</Form.Label>
                        <Form.Control
                            type="number"
                            value={ml2}
                            onChange={(e) => setMl2(e.target.value)}
                            placeholder="Enter value"
                        />
                    </div>
                    <div className="col-auto text-center pb-2">&rarr;</div>
                    <div className="col-md-4">
                        <Form.Label>liters (L)</Form.Label>
                        <Form.Control
                            type="number"
                            value={liters2}
                            placeholder="Result"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-auto">
                        <Button className="bg-white text-black border-secondary" onClick={mlToL}>Convert</Button>
                    </div>
                </div>
                <small className="d-block mt-2 text-uppercase">FORMULA</small>
                <div className="border rounded p-2 text-success">L = mL ÷ 1000</div>
                <div className="alert alert-success" role="alert">
                    L = mL ÷ 1000
                </div>
            </Form.Group>

            <Form.Group className="mb-3 pb-2 border-bottom">
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <Form.Label>milliliters (mL)</Form.Label>
                        <Form.Control
                            type="number"
                            value={ml3}
                            onChange={(e) => setMl3(e.target.value)}
                            placeholder="Enter value"
                        />
                    </div>
                    <div className="col-auto text-center pb-2">&rarr;</div>
                    <div className="col-md-4">
                        <Form.Label>microliters (uL)</Form.Label>
                        <Form.Control
                            type="number"
                            value={ul3}
                            placeholder="Result"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-auto">
                        <Button className="bg-white text-black border-secondary" onClick={mlToUl}>Convert</Button>
                    </div>
                </div>
                <small className="d-block mt-2 text-uppercase">FORMULA</small>
                <div className="alert alert-success" role="alert">
                    uL = mL × 1000
                </div>
            </Form.Group>

            <Form.Group className="mb-3 pb-2 border-bottom">
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <Form.Label>cubic cm (cm³)</Form.Label>
                        <Form.Control
                            type="number"
                            value={cm3}
                            onChange={(e) => setCm3(e.target.value)}
                            placeholder="Enter value"
                        />
                    </div>
                    <div className="col-auto text-center pb-2">&rarr;</div>
                    <div className="col-md-4">
                        <Form.Label>milliliters (mL)</Form.Label>
                        <Form.Control
                            type="number"
                            value={ml4}
                            placeholder="Result"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-auto">
                        <Button className="bg-white text-black border-secondary" onClick={cm3ToMl}>Convert</Button>
                    </div>
                </div>
                <small className="d-block mt-2 text-uppercase">FORMULA</small>
                <div className="alert alert-success" role="alert">
                    mL = cm³ × 1
                </div>
            </Form.Group>

            <Form.Group>
                <div className="row g-2 align-items-end">
                    <div className="col-md-5">
                        <Form.Label>liters (L)</Form.Label>
                        <Form.Control
                            type="number"
                            value={liters5}
                            onChange={(e) => setLiters5(e.target.value)}
                            placeholder="Enter value"
                        />
                    </div>
                    <div className="col-auto text-center pb-2">&rarr;</div>
                    <div className="col-md-4">
                        <Form.Label>cubic dm (dm³)</Form.Label>
                        <Form.Control
                            type="number"
                            value={dm3}
                            placeholder="Result"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="col-auto">
                        <Button className="bg-white text-black border-secondary" onClick={lToDm3}>Convert</Button>
                    </div>
                </div>
                <small className="d-block mt-2 text-uppercase">FORMULA</small>
                <div className="border rounded p-2 text-success">dm³ = L × 1 (equivalent)</div>
            </Form.Group>
        </Form>
    );
}