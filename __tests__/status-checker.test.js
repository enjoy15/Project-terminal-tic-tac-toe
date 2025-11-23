import { checkRow, checkColumn, checkDiagonal } from "../status-checker.js";

//row test

test("checkRow returns true if player owns all squares in a row", () => {
  const boardWinRow = [
    ["X", "X", "X"],
    ["_", "_", "_"],
    ["O", "O", "_"],
  ];

  expect(checkRow(boardWinRow, "X", 0)).toBe(true);
});

//column test

test("checkColumn returns true if player owns all squares in a column", () => {
  const boardWinColumn = [
    ["O", "_", "_"],
    ["O", "X", "_"],
    ["O", "_", "_"],
  ];

  expect(checkColumn(boardWinColumn, "O", 0)).toBe(true);
});

//diagonal test

test("checkDiagonal returns true for main diagonal X X X", () => {
  const boardMainDiagonal = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["_", "_", "X"],
  ];

  expect(checkDiagonal(boardMainDiagonal, "X")).toBe(true);
});

test("checkDiagonal returns true for anti-diagonal O O O", () => {
  const boardAntiDiagonal = [
    ["_", "_", "O"],
    ["_", "O", "_"],
    ["O", "_", "_"],
  ];

  expect(checkDiagonal(boardAntiDiagonal, "O")).toBe(true);
});
