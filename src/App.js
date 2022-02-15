import "./App.css";
import { useState } from "react";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function App() {
  const [antic, setAntic] = useState(0);
  const [display, setDisplay] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [novaEntrada, setNovaEntrada] = useState(false);
  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);

    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const calcular = () => {
    if (operacio === "+") {
      setDisplay(antic + display);
      setAntic(antic + display);
    }
    if (operacio === "-") {
      setDisplay(antic - display);

      setAntic(antic - display);
    }
  };

  const entraNumero = (numero) => {
    if (novaEntrada === true) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };
  return (
    <div className="Caculadora">
      <div className="Display">
        ({antic}){operacio}
        {display}
        <br />
        {numeros.map((numero) => (
          <button onClick={() => entraNumero(numero)}>{numero}</button>
        ))}
        <br />
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={() => entraOperacio("-")}>-</button>
        <br />
        <button onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default App;
