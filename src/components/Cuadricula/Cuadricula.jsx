import { useState } from "react";

export default function Cuadricula() {
  const [columnas, setColumnas] = useState("");
  const [filas, setFilas] = useState("");
  const [cuadricula, setCuadricula] = useState();

  const inputColumnas = (ev) => {
    const value = parseInt(ev.target.value);
    setColumnas(value);
  };

  const inputFilas = (ev) => {
    const value = parseInt(ev.target.value);
    setFilas(value);
  };

  const crearCuadricula = () => {
    if (filas > 0 && columnas > 0) {
      const nuevaCuadricula = [];

      for (let i = 0; i < filas; i++) {
        const fila = (
          <tr key={i}>
            {Array.from({ length: columnas }).map((_, j) => (
              <td key={j}>
                <img
                  src="https://png.pngtree.com/png-vector/20210522/ourmid/pngtree-rubber-duck-bathing-cute-play-png-image_3321934.jpg"
                  alt="ducks"
                />
              </td>
            ))}
          </tr>
        );
        nuevaCuadricula.push(fila);
      }
      return nuevaCuadricula;
    }
  };

  return (
    <>
      <div>
        <h3>Introduce las columnas</h3>
        <input type="text" onChange={inputColumnas} />

        <h3>Introduce las filas</h3>
        <input type="text" onChange={inputFilas} />

        <button onClick={() => setCuadricula(crearCuadricula())}>
          Crear cuadrícula
        </button>
      </div>
      <div>{cuadricula}</div>
    </>
  );
}
