
/**
 * class constructor, showing game state
 *
 * @param {number} cols - columns of the board
 * @param {number} rows - rows of the board
 */
function BoardModel(cols, rows) {
    this._cols = cols || 7;
    this._rows = rows || 6;
    this._data = [];
    this._currentPlayer = BoardModel.WHITE;
    this._totalTokens = 0;

    this.reset();
}
_p = BoardModel.prototype;

// variables useful for easier understanding code
BoardModel.EMPTY = 0; 
BoardModel.WHITE = 1;
BoardModel.BLACK = 2;
BoardModel.NONE = 0;
BoardModel.WIN = 1;
BoardModel.DRAW = 2;
BoardModel.ILLEGAL_TURN = 3;

// reseting game state - new game
_p.reset = function () {
    this._data = [];
    for (let i = 0; i < this._rows; i++) {
        this._data[i] = [];
        for (let j = 0; j < this._cols; j++) {
            this._data[i][j] = BoardModel.EMPTY;    
        }
    }
    this._currentPlayer = BoardModel.WHITE;
    this._totalTokens = 0;
};

// public methods used by other classes (e.g. BoardRenderer)
_p.getPiece = function(col, row){
    return this._data[row][col];
};

_p.getCols = function(){
    return this._cols;
};

_p.getRows = function(){
    return this._rows;
}

_p.makeTurn = function(column) {
    // current dot 
    let piece = this._currentPlayer;

    // check column if it's right
    if (column < 0 || column > this._cols) {
        return {
            status: BoardModel.ILLEGAL_TURN
        }
    }
    // check if column has free row - if not, end turn
    let row = this._getEmptyRow(column);
    if (row == -1) {
        return {
            status: BoardModel.ILLEGAL_TURN
        }
    }
    // free row - make turn
    this._totalTokens++;
    this._data[row][column] = piece;
    // change player 
    this._toggleCurrentPlayer();

    // end move, with current game state
    return {
        status: this._getGameState(column, row),
        x: column,
        y: row,
        piece: piece
    }
};

// find empty row - if not ok send -1 
_p._getEmptyRow = function(column){
    for (let i = this._rows -1; i >= 0; i--) {
        if (!this.getPiece(column, i)) {
            return i;
        }
    }
    return -1;
};

// change player
_p._toggleCurrentPlayer = function(){
    if (this._currentPlayer == BoardModel.WHITE) {
        this._currentPlayer = BoardModel.BLACK
    } else{
        this._currentPlayer = BoardModel.WHITE
    }
};

// 
/**
 * counting dots of the same colour in one direction
 * @param column column start
 * @param row row start
 * @param deltaX direction x checking
 * @param deltaY direction y checking
 */

_p._checkWinDirection = function(column, row, deltaX, deltaY) {
    let pieceColor = this.getPiece(column, row);
    let tokenCounter = 0;
    let c = column + deltaX;
    let r = row + deltaY;

    while ( c >= 0 && 
            r >= 0 &&
            c < this._cols &&
            r < this._rows &&
            this.getPiece(c,r) == pieceColor) {
        c += deltaX;
        r += deltaYl
        tokenCounter++;
    }
    return tokenCounter;
};
/**
 * Check if someone win
 * @param column last turn column
 * @param row last turn row
 */
_p._getGameState = function(column, row){
    // check if there is draw (no free cells)
    if (this._totalTokens == Game.BOARD_WIDTH*Game.BOARD_HEIGHT) {
        return BoardModel.DRAW
    }

    for (let deltaX = -1; deltaX < 2; deltaX++) {
        for (let deltaY = -1; deltaY < 2; deltaY++) {
            if (deltaX == 0 && deltaY == 0) 
                continue

                let count = this._checkWinDirection(column, row, deltaX, deltaY) + this._checkWinDirection(column, row, -deltaX, -deltaY) + 1;
            if(count >=4){
                return BoardModel.WIN;
            }    
        }
    }
    return BoardModel.NONE;
};