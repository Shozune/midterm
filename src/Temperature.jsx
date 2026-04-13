import { useState } from "react";
import { ConversionCard, ConversionRow } from "./ConversionCard";

const toNumber = (value) => Number(value || 0);

export default function Temperature() {
  const [celsiusToFahrenheitInput, setCelsiusToFahrenheitInput] = useState("");
  const [celsiusToFahrenheitResult, setCelsiusToFahrenheitResult] = useState("");

  const [fahrenheitToCelsiusInput, setFahrenheitToCelsiusInput] = useState("");
  const [fahrenheitToCelsiusResult, setFahrenheitToCelsiusResult] = useState("");

  const [celsiusToKelvinInput, setCelsiusToKelvinInput] = useState("");
  const [celsiusToKelvinResult, setCelsiusToKelvinResult] = useState("");

  const [kelvinToCelsiusInput, setKelvinToCelsiusInput] = useState("");
  const [kelvinToCelsiusResult, setKelvinToCelsiusResult] = useState("");

  const [kelvinToFahrenheitInput, setKelvinToFahrenheitInput] = useState("");
  const [kelvinToFahrenheitResult, setKelvinToFahrenheitResult] = useState("");

  return (
    <ConversionCard title="Temperature Conversions">
      <ConversionRow
        fromLabel="Celsius (°C)"
        toLabel="Fahrenheit (°F)"
        inputValue={celsiusToFahrenheitInput}
        resultValue={celsiusToFahrenheitResult}
        onInputChange={setCelsiusToFahrenheitInput}
        onConvert={() => setCelsiusToFahrenheitResult((toNumber(celsiusToFahrenheitInput) * 9) / 5 + 32)}
        formula="°F = (°C × 9/5) + 32"
      />

      <ConversionRow
        fromLabel="Fahrenheit (°F)"
        toLabel="Celsius (°C)"
        inputValue={fahrenheitToCelsiusInput}
        resultValue={fahrenheitToCelsiusResult}
        onInputChange={setFahrenheitToCelsiusInput}
        onConvert={() => setFahrenheitToCelsiusResult(((toNumber(fahrenheitToCelsiusInput) - 32) * 5) / 9)}
        formula="°C = (°F - 32) × 5/9"
      />

      <ConversionRow
        fromLabel="Celsius (°C)"
        toLabel="Kelvin (K)"
        inputValue={celsiusToKelvinInput}
        resultValue={celsiusToKelvinResult}
        onInputChange={setCelsiusToKelvinInput}
        onConvert={() => setCelsiusToKelvinResult(toNumber(celsiusToKelvinInput) + 273.15)}
        formula="K = °C + 273.15"
      />

      <ConversionRow
        fromLabel="Kelvin (K)"
        toLabel="Celsius (°C)"
        inputValue={kelvinToCelsiusInput}
        resultValue={kelvinToCelsiusResult}
        onInputChange={setKelvinToCelsiusInput}
        onConvert={() => setKelvinToCelsiusResult(toNumber(kelvinToCelsiusInput) - 273.15)}
        formula="°C = K - 273.15"
      />

      <ConversionRow
        fromLabel="Kelvin (K)"
        toLabel="Fahrenheit (°F)"
        inputValue={kelvinToFahrenheitInput}
        resultValue={kelvinToFahrenheitResult}
        onInputChange={setKelvinToFahrenheitInput}
        onConvert={() => setKelvinToFahrenheitResult(((toNumber(kelvinToFahrenheitInput) - 273.15) * 9) / 5 + 32)}
        formula="°F = (K - 273.15) × 9/5 + 32"
      />
    </ConversionCard>
  );
}
