import React, { Component, useState } from "react";
import Colors from "./Colors";
import Pixel from "./Pixel";

const Canvas = props => {
  var data = JSON.parse(localStorage.getItem("matrix"));

  var state =
    data == null
      ? Array(30)
          .fill()
          .map(() =>
            Array(30)
              .fill()
              .map(() => 0)
          )
      : data.obj;

  const [matrix, setMatrix] = useState(state);
  const changeColor = (rowIndex, colIndex) => {
    const newMatrix = JSON.parse(JSON.stringify(matrix));
    newMatrix[rowIndex][colIndex] = props.currentColor;

    setMatrix(newMatrix);
  };
  localStorage.setItem(
    "matrix",
    JSON.stringify({
      obj: matrix
    })
  );

  return (
    <div className={"canvas"}>
      {" "}
      {matrix.map((row, rowIndex) =>
        row.map((_, colIndex) => {
          return (
            <Pixel
              key={`${rowIndex}-${colIndex}`}
              background={Colors[matrix[rowIndex][colIndex]]}
              number={matrix[rowIndex][colIndex]}
              onClick={e => changeColor(rowIndex, colIndex)}
            />
          );
        })
      )}{" "}
    </div>
  );
};

export default Canvas;
