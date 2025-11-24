import { printBoard, checkIfNoMovesLeft } from "../board-printer.js";
import { jest } from '@jest/globals';

describe("board-printer.js", () => {
  describe("printBoard", () => {
    let consoleSpy

    beforeEach(() => {
      consoleSpy = jest.spyOn(console, "log").mockImplementation()
    })

    afterEach(() => {
      consoleSpy.mockRestore()
    })

    test("should print an empty board", () => {
      const board = [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ]

      printBoard(board)

      expect(consoleSpy).toHaveBeenCalled()
      const output = consoleSpy.mock.calls.map((call) => call[0]).join("\n")
      expect(output).toContain("|")
      expect(output).toContain("=================")
    })

    test("should print a board with moves", () => {
      const board = [
        ["X", "_", "O"],
        ["_", "X", "_"],
        ["O", "_", "X"],
      ]

      printBoard(board)

      expect(consoleSpy).toHaveBeenCalled()
      const output = consoleSpy.mock.calls.map((call) => call[0]).join("\n")
      expect(output).toContain("X")
      expect(output).toContain("O")
    })

    test("should print a full board", () => {
      const board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", "X"],
      ]

      printBoard(board)

      expect(consoleSpy).toHaveBeenCalled()
    })
  })

  describe("checkIfNoMovesLeft", () => {
    test("should return true when board is full", () => {
      const board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", "X"],
      ]

      expect(checkIfNoMovesLeft(board)).toBe(true)
    })

    test("should return false when board has empty spaces", () => {
      const board = [
        ["X", "_", "_"],
        ["_", "X", "_"],
        ["O", "O", "X"],
      ]

      expect(checkIfNoMovesLeft(board)).toBe(false)
    })

    test("should return false when board has one empty space", () => {
      const board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["O", "X", "_"],
      ]

      expect(checkIfNoMovesLeft(board)).toBe(false)
    })

    test("should return false when board is empty", () => {
      const board = [
        ["_", "_", "_"],
        ["_", "_", "_"],
        ["_", "_", "_"],
      ]

      expect(checkIfNoMovesLeft(board)).toBe(false)
    })
  })
})