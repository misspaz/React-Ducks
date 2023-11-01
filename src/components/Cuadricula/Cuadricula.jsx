import React, { useState } from "react";
import "../Cuadricula/Cuadricula.css";
import XImage from "../../assets/X.png";
import YellowDuck from "../../assets/yellow-duck2.png";
import GoldenDuck from "../../assets/golden-duck.png";

export default function Cuadricula() {
  const [columnas, setColumnas] = useState("");
  const [filas, setFilas] = useState("");
  const [cuadricula, setCuadricula] = useState([]);
  const [patitoDorado, setPatitoDorado] = useState({
    fila: -1,
    columna: -1,
  });
  const [juegoTerminado, setJuegoTerminado] = useState(false);

  const inputColumnas = (ev) => {
    const value = parseInt(ev.target.value);
    setColumnas(value);
  };

  const inputFilas = (ev) => {
    const value = parseInt(ev.target.value);
    setFilas(value);
  };

  function numRandom(max) {
    return Math.floor(Math.random() * max);
  }

  const crearCuadricula = () => {
    if (filas > 0 && columnas > 0) {
      const nuevaCuadricula = [];

      const filaDorada = numRandom(filas);
      const columnaDorada = numRandom(columnas);
      setPatitoDorado({ fila: filaDorada, columna: columnaDorada });

      for (let i = 0; i < filas; i++) {
        const fila = [];
        for (let j = 0; j < columnas; j++) {
          fila.push({
            contenido: "https://cdn-icons-png.flaticon.com/512/1/1766.png",
            revelada: false,
          });
        }
        nuevaCuadricula.push(fila);
      }
      setCuadricula(nuevaCuadricula);
    }
  };

  const revelarCelda = (fila, columna) => {
    if (cuadricula[fila][columna].revelada) {
      return;
    }

    const nuevaCuadricula = [...cuadricula];
    nuevaCuadricula[fila][columna] = {
      contenido:
        fila === patitoDorado.fila && columna === patitoDorado.columna ? (
          <img className="x-image" src={GoldenDuck} alt="golden-duck" />
        ) : (
          <img className="x-image" src={YellowDuck} alt="plastic duck" />
        ),
      revelada: true,
    };

    setCuadricula(nuevaCuadricula);

    if (fila === patitoDorado.fila && columna === patitoDorado.columna) {
      setTimeout(() => {
        alert("Winner winner duck dinner!");
        setJuegoTerminado(true);
      }, 100);
    }
  };

  const resetGame = () => {
    setJuegoTerminado(false); 
    setCuadricula([]); 
    setColumnas(""); 
    setFilas(""); 
    setPatitoDorado({ fila: -1, columna: -1 }); 
  };

  return (
    <>
      <div className="main-page">
        <div className="header">
          <h1 className="page-title">Find the golden duck!</h1>
          <div className="input-boxes">
            <div className="cols">
              <h3>Number of columns</h3>
              <input type="text" onChange={inputColumnas} />
            </div>

            <div className="rows">
              <h3>Number of rows</h3>
              <input type="text" onChange={inputFilas} />
            </div>
          </div>

          <button onClick={() => crearCuadricula()}>Let's play!</button>
        </div>
        <div>
          <table>
            <tbody>
              {cuadricula.map((fila, i) => (
                <tr key={i}>
                  {fila.map((celda, j) => (
                    <td
                      className="celda"
                      key={j}
                      onClick={() => revelarCelda(i, j)}
                    >
                      {celda.revelada ? (
                        celda.contenido
                      ) : (
                        <img className="x-image" src={XImage} alt="X" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {juegoTerminado && <button onClick={resetGame}>Restart</button>}
      </div>
    </>
  );
}
