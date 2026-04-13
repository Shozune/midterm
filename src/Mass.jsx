import { useState } from "react";
import { ConversionCard, ConversionRow } from "./ConversionCard";

const toNumber = (value) => Number(value || 0);

export default function Mass() {
  const [grams, setGrams] = useState("");
  const [kilogramsResult, setKilogramsResult] = useState("");

  const [kilograms, setKilograms] = useState("");
  const [gramsResult, setGramsResult] = useState("");

  const [gramsToMilligramsInput, setGramsToMilligramsInput] = useState("");
  const [milligramsResult, setMilligramsResult] = useState("");

  const [gramsToPoundsInput, setGramsToPoundsInput] = useState("");
  const [poundsResult, setPoundsResult] = useState("");

  const [micrograms, setMicrograms] = useState("");
  const [microgramsToMilligramsResult, setMicrogramsToMilligramsResult] = useState("");

  return (
    <ConversionCard title="Mass Conversions">
      <ConversionRow
        fromLabel="grams (g)"
        toLabel="kilograms (kg)"
        inputValue={grams}
        resultValue={kilogramsResult}
        onInputChange={setGrams}
        onConvert={() => setKilogramsResult(toNumber(grams) / 1000)}
        formula="kg = g ÷ 1000"
      />

      <ConversionRow
        fromLabel="kilograms (kg)"
        toLabel="grams (g)"
        inputValue={kilograms}
        resultValue={gramsResult}
        onInputChange={setKilograms}
        onConvert={() => setGramsResult(toNumber(kilograms) * 1000)}
        formula="g = kg × 1000"
      />

      <ConversionRow
        fromLabel="grams (g)"
        toLabel="milligrams (mg)"
        inputValue={gramsToMilligramsInput}
        resultValue={milligramsResult}
        onInputChange={setGramsToMilligramsInput}
        onConvert={() => setMilligramsResult(toNumber(gramsToMilligramsInput) * 1000)}
        formula="mg = g × 1000"
      />

      <ConversionRow
        fromLabel="grams (g)"
        toLabel="pounds (lb)"
        inputValue={gramsToPoundsInput}
        resultValue={poundsResult}
        onInputChange={setGramsToPoundsInput}
        onConvert={() => setPoundsResult(toNumber(gramsToPoundsInput) * 0.002205)}
        formula="lb = g × 0.002205"
      />

      <ConversionRow
        fromLabel="micrograms (µg)"
        toLabel="milligrams (mg)"
        inputValue={micrograms}
        resultValue={microgramsToMilligramsResult}
        onInputChange={setMicrograms}
        onConvert={() => setMicrogramsToMilligramsResult(toNumber(micrograms) / 1000)}
        formula="mg = µg ÷ 1000"
      />
    </ConversionCard>
  );
}
