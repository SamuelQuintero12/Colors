import { useState, useEffect } from "react";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import LikeDislike from "./components/LikeDislike";
import ColorSelector from "./components/ColorSelector";
import Timer from "./components/Timer";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [color, setColor] = useState("#FFFFFF");

  // Cambiar el color de fondo de toda la pantalla
  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.transition = "background-color 0.3s ease";
  }, [color]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} />
      <div className="container">
        <ModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <LikeDislike />
        <ColorSelector setColor={setColor} />
        <Timer />
      </div>
    </div>
  );
}
