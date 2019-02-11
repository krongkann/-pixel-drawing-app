import React from "react";
import Pixel from "./Pixel";

import Colors from "./Colors";

export default props => {
  return (
    <div className="colorpicker">
      {Colors.map((color, index) => {
        return (
          <Pixel
            key={index}
            onClick={e => props.setColor(index)}
            background={color}
            current={Colors[props.currentColor] === color}
          />
        );
      })}
    </div>
  );
};
