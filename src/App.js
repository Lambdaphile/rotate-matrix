import React from "react";

import { Matrix } from "./components";
import "./styles.css";

export default function App() {
  const [matrix, setMatrix] = React.useState([
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ]);

  function handleChangeMatrix(value, rowIndex, colIndex) {
    setMatrix((matrix) =>
      matrix.map((row, i) =>
        row.map((item, j) => (i === rowIndex && j === colIndex ? value : item))
      )
    );
  }

  function handleRotate() {
    matrix.forEach((row, i, matrix) =>
      row.forEach((_, j) => {
        setTimeout(() => {
          matrix[i][j] = matrix[j][i];
          setMatrix(matrix);
        }, 1000);
      })
    );
  }

  return (
    <div className="App">
      <Matrix
        className="App-matrix"
        matrix={matrix}
        onChange={handleChangeMatrix}
      />
      <button className="button" type="button" onClick={handleRotate}>
        Rotate
      </button>
    </div>
  );
}
