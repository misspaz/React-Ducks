import { useState } from "react";

export default function Cuadricula() {
  const [columnas, setColumnas] = useState("");
  const [filas, setFilas] = useState("");

  const inputColumnas = (ev) => {
    const value = ev.target.value;
    setColumnas(value);
  };

  const inputFilas = (ev) => {
    const value = parseInt(ev.target.value);
    setFilas(value);
  };

const drawBoard = () => {
for (let i = 0; i < filas; i++) {
   const duckImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_7njkhxadGkXXTUuF-qAYgsRUFELLnF_RXFyQtfu8miaIdsIMYL56tmujbfaqXYNfAV0&usqp=CAU"
    for (let j = 0; j < columnas; j++) {
        
        
    }
   
    
}
}



  return (
    <div>
      <h3>Introduce las columnas</h3>
      <input type="text" onChange={inputColumnas} />

      <h3>Introduce las filas</h3>
      <input type="text" onChange={inputFilas} />

      <button onClick={drawBoard}>Crear cuadrícula</button>
    </div>
  );
}
