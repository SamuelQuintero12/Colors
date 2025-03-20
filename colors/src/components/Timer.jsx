import { useState, useEffect } from "react";

export default function Timer() {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    let intervalo;
    if (activo) {
      intervalo = setInterval(() => {
        setSegundos((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo]);

  return (
    <div>
      <p>Segundos: {segundos}</p>
      <button className="start" onClick={() => setActivo(true)}>Iniciar</button>
      <button className="stop" onClick={() => { setActivo(false); setSegundos(0); }}>Parar</button>
    </div>
  );
}
