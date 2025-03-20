import { useState } from "react";

const coloresAbsolutos = [
  "#FF0000", "#00FF00", "#0000FF", "#FFFF00",
  "#FF00FF", "#00FFFF", "#000000", "#FFFFFF",
  "#808080", "#800000", "#808000", "#800080",
  "#008080", "#C0C0C0", "#FFA500", "#A52A2A"
];

export default function ColorSelector({ setColor }) {
  const [colorSeleccionado, setColorSeleccionado] = useState("");

  function generarColor() {
    const colorAleatorio = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)];
    setColorSeleccionado(colorAleatorio);
    setColor(colorAleatorio);
  }

  return (
    <div>
      <button className="color" onClick={generarColor}>Generar Color</button>
      <p>Color seleccionado: <strong>{colorSeleccionado}</strong></p>
    </div>
  );
}
