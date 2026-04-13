import { useState } from "react";
import { ConversionCard, ConversionRow } from "./ConversionCard";

const toNumber = (value) => Number(value || 0);

export default function Volume() {
  const [litersToMillilitersInput, setLitersToMillilitersInput] = useState("");
  const [litersToMillilitersResult, setLitersToMillilitersResult] = useState("");

  const [millilitersToLitersInput, setMillilitersToLitersInput] = useState("");
  const [millilitersToLitersResult, setMillilitersToLitersResult] = useState("");

  const [millilitersToMicrolitersInput, setMillilitersToMicrolitersInput] = useState("");
  const [millilitersToMicrolitersResult, setMillilitersToMicrolitersResult] = useState("");

  const [cubicCentimetersToMillilitersInput, setCubicCentimetersToMillilitersInput] = useState("");
  const [cubicCentimetersToMillilitersResult, setCubicCentimetersToMillilitersResult] = useState("");

  const [litersToCubicDecimetersInput, setLitersToCubicDecimetersInput] = useState("");
  const [litersToCubicDecimetersResult, setLitersToCubicDecimetersResult] = useState("");

  return (
    <ConversionCard title="Volume Conversions">
      <ConversionRow
        fromLabel="liters (L)"
        toLabel="milliliters (mL)"
        inputValue={litersToMillilitersInput}
        resultValue={litersToMillilitersResult}
        onInputChange={setLitersToMillilitersInput}
        onConvert={() => setLitersToMillilitersResult(toNumber(litersToMillilitersInput) * 1000)}
        formula="mL = L × 1000"
      />

      <ConversionRow
        fromLabel="milliliters (mL)"
        toLabel="liters (L)"
        inputValue={millilitersToLitersInput}
        resultValue={millilitersToLitersResult}
        onInputChange={setMillilitersToLitersInput}
        onConvert={() => setMillilitersToLitersResult(toNumber(millilitersToLitersInput) / 1000)}
        formula="L = mL ÷ 1000"
      />

      <ConversionRow
        fromLabel="milliliters (mL)"
        toLabel="microliters (µL)"
        inputValue={millilitersToMicrolitersInput}
        resultValue={millilitersToMicrolitersResult}
        onInputChange={setMillilitersToMicrolitersInput}
        onConvert={() => setMillilitersToMicrolitersResult(toNumber(millilitersToMicrolitersInput) * 1000)}
        formula="µL = mL × 1000"
      />

      <ConversionRow
        fromLabel="cubic cm (cm³)"
        toLabel="milliliters (mL)"
        inputValue={cubicCentimetersToMillilitersInput}
        resultValue={cubicCentimetersToMillilitersResult}
        onInputChange={setCubicCentimetersToMillilitersInput}
        onConvert={() => setCubicCentimetersToMillilitersResult(toNumber(cubicCentimetersToMillilitersInput))}
        formula="mL = cm³ × 1 (equivalent)"
      />

      <ConversionRow
        fromLabel="liters (L)"
        toLabel="cubic dm (dm³)"
        inputValue={litersToCubicDecimetersInput}
        resultValue={litersToCubicDecimetersResult}
        onInputChange={setLitersToCubicDecimetersInput}
        onConvert={() => setLitersToCubicDecimetersResult(toNumber(litersToCubicDecimetersInput))}
        formula="dm³ = L × 1 (equivalent)"
      />
    </ConversionCard>
  );
}
