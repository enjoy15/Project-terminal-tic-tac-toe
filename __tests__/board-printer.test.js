import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});


