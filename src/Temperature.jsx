import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Temperature() {
  const [celsius, setCelsius] = useState('')
  const [fahrenheit, setFahrenheit] = useState('')
  const [celsiusForKelvin, setCelsiusForKelvin] = useState('')
  const [kelvinForCelsius, setKelvinForCelsius] = useState('')
  const [kelvinForFahrenheit, setKelvinForFahrenheit] = useState('')

  const [resultCF, setResultCF] = useState('')
  const [resultFC, setResultFC] = useState('')
  const [resultCK, setResultCK] = useState('')
  const [resultKC, setResultKC] = useState('')
  const [resultKF, setResultKF] = useState('')

  const cToF = () => {
    setResultCF((celsius * 9 / 5) + 32)
  }

  const fToC = () => {
    setResultFC((fahrenheit - 32) * 5 / 9)
  }

  const cToK = () => {
    setResultCK(Number(celsiusForKelvin) + 273.15)
  }

  const kToC = () => {
    setResultKC(Number(kelvinForCelsius) - 273.15)
  }

  const kToF = () => {
    setResultKF(((Number(kelvinForFahrenheit) - 273.15) * 9 / 5) + 32)
  }

  return (
    <div className="container py-3" style={{ maxWidth: '760px' }}>
      <div className="card border">
        <div className="card-body p-3">
          <div className="small text-uppercase fw-semibold text-secondary mb-2">Temperature Conversions</div>

          <div className="border rounded p-2 mb-2">
            <div className="row gx-2 small text-muted mb-1">
              <div className="col-5">Celsius (°C)</div>
              <div className="col-1" />
              <div className="col-4">Fahrenheit (°F)</div>
              <div className="col-2" />
            </div>
            <div className="row gx-2 align-items-center">
              <div className="col-5">
                <Form.Control size="sm" type="number" placeholder="Enter value" value={celsius} onChange={(e) => setCelsius(e.target.value)} />
              </div>
              <div className="col-1 text-center text-muted">→</div>
              <div className="col-4">
                <Form.Control size="sm" readOnly value={resultCF || 'Result'} />
              </div>
              <div className="col-2 d-grid">
                <Button size="sm" variant="light" className="border" onClick={cToF}>Convert</Button>
              </div>
            </div>
            <div className="small text-uppercase text-secondary mt-2">Formula</div>
            <div className="small fw-semibold" style={{ color: '#2f8f66' }}>°F = (°C * 9/5) + 32</div>
          </div>

          <div className="border rounded p-2 mb-2">
            <div className="row gx-2 small text-muted mb-1">
              <div className="col-5">Fahrenheit (°F)</div>
              <div className="col-1" />
              <div className="col-4">Celsius (°C)</div>
              <div className="col-2" />
            </div>
            <div className="row gx-2 align-items-center">
              <div className="col-5">
                <Form.Control size="sm" type="number" placeholder="Enter value" value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} />
              </div>
              <div className="col-1 text-center text-muted">→</div>
              <div className="col-4">
                <Form.Control size="sm" readOnly value={resultFC || 'Result'} />
              </div>
              <div className="col-2 d-grid">
                <Button size="sm" variant="light" className="border" onClick={fToC}>Convert</Button>
              </div>
            </div>
            <div className="small text-uppercase text-secondary mt-2">Formula</div>
            <div className="small fw-semibold" style={{ color: '#2f8f66' }}>°C = (°F - 32) * 5/9</div>
          </div>

          <div className="border rounded p-2 mb-2">
            <div className="row gx-2 small text-muted mb-1">
              <div className="col-5">Celsius (°C)</div>
              <div className="col-1" />
              <div className="col-4">Kelvin (K)</div>
              <div className="col-2" />
            </div>
            <div className="row gx-2 align-items-center">
              <div className="col-5">
                <Form.Control size="sm" type="number" placeholder="Enter value" value={celsiusForKelvin} onChange={(e) => setCelsiusForKelvin(e.target.value)} />
              </div>
              <div className="col-1 text-center text-muted">→</div>
              <div className="col-4">
                <Form.Control size="sm" readOnly value={resultCK || 'Result'} />
              </div>
              <div className="col-2 d-grid">
                <Button size="sm" variant="light" className="border" onClick={cToK}>Convert</Button>
              </div>
            </div>
            <div className="small text-uppercase text-secondary mt-2">Formula</div>
            <div className="small fw-semibold" style={{ color: '#2f8f66' }}>K = °C + 273.15</div>
          </div>

          <div className="border rounded p-2 mb-2">
            <div className="row gx-2 small text-muted mb-1">
              <div className="col-5">Kelvin (K)</div>
              <div className="col-1" />
              <div className="col-4">Celsius (°C)</div>
              <div className="col-2" />
            </div>
            <div className="row gx-2 align-items-center">
              <div className="col-5">
                <Form.Control size="sm" type="number" placeholder="Enter value" value={kelvinForCelsius} onChange={(e) => setKelvinForCelsius(e.target.value)} />
              </div>
              <div className="col-1 text-center text-muted">→</div>
              <div className="col-4">
                <Form.Control size="sm" readOnly value={resultKC || 'Result'} />
              </div>
              <div className="col-2 d-grid">
                <Button size="sm" variant="light" className="border" onClick={kToC}>Convert</Button>
              </div>
            </div>
            <div className="small text-uppercase text-secondary mt-2">Formula</div>
            <div className="small fw-semibold" style={{ color: '#2f8f66' }}>°C = K - 273.15</div>
          </div>

          <div className="border rounded p-2">
            <div className="row gx-2 small text-muted mb-1">
              <div className="col-5">Kelvin (K)</div>
              <div className="col-1" />
              <div className="col-4">Fahrenheit (°F)</div>
              <div className="col-2" />
            </div>
            <div className="row gx-2 align-items-center">
              <div className="col-5">
                <Form.Control size="sm" type="number" placeholder="Enter value" value={kelvinForFahrenheit} onChange={(e) => setKelvinForFahrenheit(e.target.value)} />
              </div>
              <div className="col-1 text-center text-muted">→</div>
              <div className="col-4">
                <Form.Control size="sm" readOnly value={resultKF || 'Result'} />
              </div>
              <div className="col-2 d-grid">
                <Button size="sm" variant="light" className="border" onClick={kToF}>Convert</Button>
              </div>
            </div>
            <div className="small text-uppercase text-secondary mt-2">Formula</div>
            <div className="small fw-semibold" style={{ color: '#2f8f66' }}>°F = ((K - 273.15) * 9/5) + 32</div>
          </div>
        </div>
      </div>
    </div>
  )
}