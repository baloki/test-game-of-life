import { Cell, evolve } from "./game-of-life";

describe("evolve", () => {
  it("should not do anything with an empty grid", () => {
    expect(evolve(new Set<Cell>())).toEqual(new Set<Cell>());
  });

  it("should handle underpopulation when one cell has two neighbours", () => {
    const underPopulatedCells = new Set<Cell>(["1,1", "1,2", "1,3"]);

    expect(evolve(underPopulatedCells)).toEqual(new Set<Cell>(["1,2"]));
  });

  it("should handle underpopulation when no cells have enough neighbours", () => {
    const underPopulatedCells = new Set<Cell>(["1,1", "1,2"]);

    expect(evolve(underPopulatedCells)).toEqual(new Set<Cell>());
  });

  it("should have result of 1,1", () => {
    const underPopulatedCells = new Set<Cell>([
      "1,1",
      "1,2",
      "2,2",
      "2,3",
      "1,3",
    ]);

    expect(evolve(underPopulatedCells)).toEqual(
      new Set<Cell>(["1,1", "2,3", "1,3"])
    );
  });
});
