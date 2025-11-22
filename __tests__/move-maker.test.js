import { makeMove } from "../move-maker.js";

describe("Simple move-maker tests", () => {
  test("valid moves should work", () => {
    const board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    expect(makeMove(board, "1,1", "X")).toBe(true);
    expect(board[0][0]).toBe("X");

    expect(makeMove(board, "2,2", "O")).toBe(true);
    expect(board[1][1]).toBe("O");
  });

  test("invalid moves should be rejected", () => {
    const board = [
      ["X", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    expect(makeMove(board, "1,1", "O")).toBe(false);
    expect(makeMove(board, "0,1", "X")).toBe(false);
    expect(makeMove(board, "1,4", "O")).toBe(false); 
  });

  test("board should be correctly updated", () => {
    const board = [
      ["_", "_", "_"],
      ["_", "_", "_"],
      ["_", "_", "_"],
    ];

    makeMove(board, "2,2", "X");
    makeMove(board, "1,3", "O");

    expect(board).toEqual([
      ["_", "_", "O"],
      ["_", "X", "_"],
      ["_", "_", "_"],
    ]);
  });
});
