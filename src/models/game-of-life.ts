export type Cell = string;

export function generateInitialState() {
  return new Set<Cell>(["1,1", "1,2", "1,3"]);
}

export function evolve(cells: Set<Cell>): Set<Cell> {
  return cells;
}
