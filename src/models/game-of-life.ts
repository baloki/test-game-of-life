export type Cell = string;

export function generateInitialState() {
  return new Set<Cell>(["1,1", "1,2", "2,2", "2,3", "1,3"]);
}

export function evolve(cells: Set<Cell>): Set<Cell> {
  const newCells = new Set(cells);

  cells.forEach((cell: Cell) => {
    // Create array of dead cells surrounding live cells
    // Loops over those to identify those that have three neighbours that a alive
    // store that result

    const [cellRow, cellColumn] = cell.split(",");

    let numberOfAjecentCells: number = 0;

    if (cells.has(`${parseInt(cellRow) + 1},${cellColumn}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${cellRow},${parseInt(cellColumn) + 1}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${parseInt(cellRow) + 1},${parseInt(cellColumn) + 1}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${parseInt(cellRow) - 1},${cellColumn}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${cellRow},${parseInt(cellColumn) - 1}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${parseInt(cellRow) - 1},${parseInt(cellColumn) - 1}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${parseInt(cellRow) + 1},${parseInt(cellColumn) - 1}`)) {
      numberOfAjecentCells++;
    }

    if (cells.has(`${parseInt(cellRow) - 1},${parseInt(cellColumn) + 1}`)) {
      numberOfAjecentCells++;
    }

    if (numberOfAjecentCells < 2) {
      newCells.delete(cell);
    }

    if (numberOfAjecentCells > 3) {
      newCells.delete(cell);
    }
  });

  // merge two arrays before returning

  return newCells;
}
