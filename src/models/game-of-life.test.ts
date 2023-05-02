import { Cell, evolve } from "./game-of-life";

describe("evolve", () => {
  it("should not do anything with an empty grid", () => {
    expect(evolve(new Set<Cell>())).toEqual(new Set<Cell>());
  });
});
