import React, { useState, useEffect } from "react";

function Draggable(props) {
  return (
    <div className="multi-range">
      <hr />
      {props.sliders.map((slider) => {
        return (
          <input
            name={`input${slider.id}`}
            id={`input${slider.id}`}
            key={slider.id}
            type="range"
            min={slider.min}
            max={slider.max}
            step={slider.step}
            defaultValue={slider.initialValue}
            onInput={(e) => console.log(e.target.value)}
          />
        );
      })}
    </div>
  );
}

export default Draggable;
