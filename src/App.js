import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Pixel from "./components/Pixel";
import Canvas from "./components/Canvas";
import ColorPicker from "./components/ColorPicker";
import styled from "styled-components";
const App = () => {
  const [color, setColor] = useState(0);
  const Div = styled.div`
    background-color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  return (
    <Div>
      <ColorPicker currentColor={color} setColor={color => setColor(color)} />{" "}
      <Canvas currentColor={color} />{" "}
    </Div>
  );
};

export default App;
