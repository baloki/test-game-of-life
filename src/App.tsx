import React, { FunctionComponent, useEffect, useState } from "react";
import { generateInitialState, evolve, Cell } from "./models/game-of-life";
import GameOfLife from "./GameOfLife";

const App: FunctionComponent<{}> = () => {
  const [cells, setCells] = useState<Set<Cell>>(generateInitialState());
  useEffect(() => {
    const timerId = setInterval(() => {
      setCells((cells) => evolve(cells));
    }, 250);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="App">
      <GameOfLife cells={cells} width={100} height={100} />
    </div>
  );
};

export default App;
