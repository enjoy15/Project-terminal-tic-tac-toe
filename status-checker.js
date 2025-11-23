import { checkIfNoMovesLeft } from './board-printer.js';

/*
    Example board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a row index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the row
    Otherwise, return false
*/
export function checkRow(board, player, rowNumber) {
    // getting the row we care about
    const row = board[rowNumber];

    //checking if all 3 positions in this row are equal to player
    if (row[0] === player && row[1] === player && row[2] === player) {
        return true;
    }

    return false;
}

/*
    Given 3 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
        - a column index number (0, 1 or 2)
    Return true if the player has made a move in all 3 squares in the column
    Otherwise, return false
*/
export function checkColumn(board, player, columnNumber) {
    //checking the same column in each of the 3 rows
    if (
        board[0][columnNumber] === player &&
        board[1][columnNumber] === player &&
        board[2][columnNumber] === player 
    ) {
        return true;
    }

    return false
}

/*
    Given 2 parameters:
        - a tic-tac-toe board (array of arrays)
        - a player ('X' or 'O')
    Return true if the player has made a move in 3 diagonal squares
    Otherwise, return false
*/
export function checkDiagonal(board, player) {
    // It may be easier to use an if statement than a loop here
    //Main diagonal: (0,0), (1,1), (2,2)
    const mainDiagonal =
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player; 
    
    //Anti-diagonal: (0,2), (1,1), (2,0)
    const antiDiagonal =
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player; 
    
    //If either diagonal is filled by the player, they win on a diagonal
    return mainDiagonal || antiDiagonal;
}



/*
    There is no need to change any code below this line.
*/

function checkIfPlayerWon(board, player) {
    for(let i = 0; i <= 2; i++) {
        if(checkRow(board, player, i) || checkColumn(board, player, i)) {
            return true;
        }
    }

    if(checkDiagonal(board, player)) {
        return true;
    }

    return false;
}

export function isGameOver(board) {
    if(checkIfPlayerWon(board, 'X')) {
        console.log('X has won the game!\n');
        return true;
    }

    if(checkIfPlayerWon(board, 'O')) {
        console.log('O has won the game!\n');
        return true;
    }

    if(checkIfNoMovesLeft(board)) {
        console.log('Game Over - It\s a tie!\n');
        return true;
    }

    return false;
}
