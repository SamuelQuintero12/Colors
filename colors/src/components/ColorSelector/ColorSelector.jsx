// ColorSelector.jsx
import React, { useState } from 'react';

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF",
  "#00FFFF", "#000000", "#FFFFFF", "#808080", "#800000",
  "#808000", "#800080", "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const selectColor = () => {
    const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setSelectedColor(randomColor);
    document.body.style.backgroundColor = randomColor;
  };

  return (
    <div>
      <button
        onClick={selectColor}
        className="p-2 bg-purple-500 text-white rounded"
      >
        Generar Color
      </button>
      {selectedColor && (
        <div className="mt-2 p-2 bg-gray-200 dark:bg-gray-800 rounded">
          Color seleccionado: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorSelector;
