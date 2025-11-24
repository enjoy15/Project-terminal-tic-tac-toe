/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  console.log("\n") // Add some spacing

  for (let i = 0; i < board.length; i++) {
    const row = board[i]
    // Replace '_' with space for better display
    const displayRow = row.map((cell) => (cell === "_" ? " " : cell))
    console.log(` ${displayRow[0]} | ${displayRow[1]} | ${displayRow[2]} `)

    // Print separator line after each row except the last
    if (i < board.length - 1) {
      console.log("=================")
    }
  }

  console.log("\n") // Add some spacing
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  // Check every cell in the board
  for (const row of board) {
    for (const cell of row) {
      if (cell === "_") {
        return false // Found an empty space, so there are moves left
      }
    }
  }

  return true // No empty spaces found, no moves left
}
