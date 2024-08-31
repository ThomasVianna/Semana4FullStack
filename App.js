import React, { useState, useEffect } from "react";

const Dezenas = ({ cliques }) => {
  useEffect(() => {
    console.log(`useEffect: ${cliques}`);

    return () => console.log(`Dezenas - descarga: ${cliques}`);
  }, [cliques]);

  return (
    <h2>
      {parseInt.cliques / 10} Dezenas + {cliques % 10} cliques.
    </h2>
  );
};

const Unidades = ({ cliques }) => {
  useEffect(() => {
    console.log(`useEffect: ${cliques}`);

    return () => console.log(`Unidades - descarga: ${cliques}`);
  }, [cliques]); 

  return <h2>{cliques} cliques.</h2>;
};

const App = () => {
  const [cliques, setCliques] = useState(0);

  let painel;
  if (cliques >= 10) { 
    painel = <Unidades cliques={cliques} />;
  } else {
    painel = <Dezenas cliques={cliques} />;
  }
  
  return (
    <div>
      <h2>{cliques} cliques.</h2>
      <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
    </div>
  );
};

export default App;
