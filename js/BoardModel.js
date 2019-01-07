
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

    _p = BoardModel.prototype;
}

// variables useful for easier understanding code
BoardModel.EMPTY = 0; 
BoardModel.WHITE = 1;
BoardModel.BLACK = 2;


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