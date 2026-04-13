import { useState } from "react";

export default function Mass() {

  const [gInput, setGInput] = useState("");

  const [kgResult, setKgResult] = useState("");

  const [kgInput, setKgInput] = useState("");

  const [gResult, setGResult] = useState("");

  const [gToMgInput, setGToMgInput] = useState("");

  const [mgResult, setMgResult] = useState("");

  const [gToLbInput, setGToLbInput] = useState("");

  const [lbResult, setLbResult] = useState("");

  const [ugInput, setUgInput] = useState("");

  const [ugToMgResult, setUgToMgResult] = useState("");

  const styles = {

    wrapper: {

      fontFamily: "'Courier New', Courier, monospace",

      backgroundColor: "#fff",

      border: "1px solid #ddd",

      borderRadius: "12px",

      padding: "24px 28px",

      maxWidth: "700px",

      margin: "0 auto",

      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",

    },

    header: {

      fontSize: "11px",

      fontWeight: "700",

      letterSpacing: "0.1em",

      color: "#888",

      marginBottom: "16px",

      fontFamily: "sans-serif",

    },

    row: {

      display: "flex",

      alignItems: "flex-end",

      gap: "12px",

      marginBottom: "12px",

    },

    fieldGroup: {

      display: "flex",

      flexDirection: "column",

      flex: 1,

    },

    label: {

      fontSize: "12px",

      color: "#555",

      marginBottom: "5px",

      fontFamily: "sans-serif",

    },

    input: {

      border: "1px solid #ccc",

      borderRadius: "6px",

      padding: "10px 14px",

      fontSize: "14px",

      color: "#333",

      outline: "none",

      width: "100%",

      boxSizing: "border-box",

      backgroundColor: "#fff",

    },

    readOnly: {

      border: "1px solid #ccc",

      borderRadius: "6px",

      padding: "10px 14px",

      fontSize: "14px",

      color: "#aaa",

      backgroundColor: "#fff",

      width: "100%",

      boxSizing: "border-box",

    },

    arrow: {

      fontSize: "18px",

      color: "#555",

      paddingBottom: "10px",

      flexShrink: 0,

    },

    button: {

      border: "1px solid #bbb",

      borderRadius: "8px",

      backgroundColor: "#fff",

      padding: "10px 20px",

      fontSize: "14px",

      fontFamily: "sans-serif",

      cursor: "pointer",

      whiteSpace: "nowrap",

      flexShrink: 0,

      color: "#333",

      alignSelf: "flex-end",

    },

    divider: {

      border: "none",

      borderTop: "1px solid #eee",

      margin: "14px 0",

    },

    formulaLabel: {

      fontSize: "10px",

      fontWeight: "700",

      letterSpacing: "0.08em",

      color: "#999",

      marginBottom: "6px",

      fontFamily: "sans-serif",

    },

    formulaBox: {

      border: "1px solid #b2dfdb",

      borderRadius: "6px",

      padding: "10px 14px",

      backgroundColor: "#f0faf9",

      color: "#2aa198",

      fontSize: "13px",

      fontFamily: "'Courier New', Courier, monospace",

      marginBottom: "20px",

    },

  };

  const ConversionRow = ({ fromLabel, toLabel, inputVal, onInputChange, resultVal, onConvert }) => (
<div style={styles.row}>
<div style={styles.fieldGroup}>
<label style={styles.label}>{fromLabel}</label>
<input

          type="number"

          value={inputVal}

          onChange={(e) => onInputChange(e.target.value)}

          placeholder="Enter value"

          style={styles.input}

        />
</div>
<span style={styles.arrow}>→</span>
<div style={styles.fieldGroup}>
<label style={styles.label}>{toLabel}</label>
<input

          readOnly

          value={resultVal}

          placeholder="Result"

          style={styles.readOnly}

        />
</div>
<button style={styles.button} onClick={onConvert}>Convert</button>
</div>

  );

  return (
<div style={styles.wrapper}>
<div style={styles.header}>MASS CONVERSIONS</div>
<ConversionRow

        fromLabel="grams (g)"

        toLabel="kilograms (kg)"

        inputVal={gInput}

        onInputChange={setGInput}

        resultVal={kgResult}

        onConvert={() => setKgResult(gInput / 1000)}

      />
<div style={styles.formulaLabel}>FORMULA</div>
<div style={styles.formulaBox}>kg = g ÷ 1000</div>
<ConversionRow

        fromLabel="kilograms (kg)"

        toLabel="grams (g)"

        inputVal={kgInput}

        onInputChange={setKgInput}

        resultVal={gResult}

        onConvert={() => setGResult(kgInput * 1000)}

      />
<div style={styles.formulaLabel}>FORMULA</div>
<div style={styles.formulaBox}>g = kg × 1000</div>
<ConversionRow

        fromLabel="grams (g)"

        toLabel="milligrams (mg)"

        inputVal={gToMgInput}

        onInputChange={setGToMgInput}

        resultVal={mgResult}

        onConvert={() => setMgResult(gToMgInput * 1000)}

      />
<div style={styles.formulaLabel}>FORMULA</div>
<div style={styles.formulaBox}>mg = g × 1000</div>
<ConversionRow

        fromLabel="grams (g)"

        toLabel="pounds (lb)"

        inputVal={gToLbInput}

        onInputChange={setGToLbInput}

        resultVal={lbResult}

        onConvert={() => setLbResult(gToLbInput * 0.002205)}

      />
<div style={styles.formulaLabel}>FORMULA</div>
<div style={styles.formulaBox}>lb = g × 0.002205</div>
<ConversionRow

        fromLabel="micrograms (µg)"

        toLabel="milligrams (mg)"

        inputVal={ugInput}

        onInputChange={setUgInput}

        resultVal={ugToMgResult}

        onConvert={() => setUgToMgResult(ugInput / 1000)}

      />
<div style={styles.formulaLabel}>FORMULA</div>
<div style={{ ...styles.formulaBox, marginBottom: 0 }}>mg = µg ÷ 1000</div>
</div>

  );

}
 