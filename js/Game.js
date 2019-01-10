/**
 * Game constructor - connecting BoardModel and BoardRenderer
 *
 * @param {} canvas - element used for drawing game
 */
function Game(canvas) {
    this._boardRect = null;
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this._boardModel = new BoardModel();
    this._boardRenderer = new BoardRenderer(this._ctx, this._boardModel);
    this.handleResize();
}
_p = Game.prototype;

/**     
 * clearing canvas and then preparing new game screen - resized
 */
_p.handleResize = function(){
    this._clearCanvas();
    this._boardRect = this._getBoardRect();
    this._boardRenderer.setSize(this._boardRect.x, this._boardRect.y, this._boardRect.cellSize);
    this._boardRenderer.repaint();
}

/** 
 * changing board size and centering it on available place
 */
_p._getBoardRect = function () {
    let cols = this._boardModel.getCols();
    let rows = this._boardModel.getRows();
    let cellSize = Math.floor(
        Math.min(this._canvas.width/cols, this._canvas.height/rows));
    let boardWidth = cellSize*cols;
    let boardHeight = cellSize*rows;

    return {
        x:  Math.floor((this._canvas.width - boardWidth) /2),
        y: Math.floor((this._canvas.height - boardHeight) /2),
        cellSize: cellSize
    }
};

/**    
 * Every click means checking column index and checking game result
 */
_p.handleClick = function(x , y){
        // take column index
    let column = Math.floor((x - this._boardRect.x) / this._boardRect.cellSize);
        // make move and check result
    let turn = this._boardModel.makeTurn(column);
        // if correct draw a dot
    if (turn.status != BoardModel.ILLEGAL_TURN) {
        this._boardRenderer.drawToken(turn.x, turn.y);
    }
        // any winner? 
    if (turn.status === BoardModel.WIN) {
        // result info and game restert
        alert(turn.piece === BoardModel.WHITE ? "White Player win" : "Black Player win");
        this._reset();
    }
        // the same when draw
    if (turn.status === BoardModel.DRAW) {
        alert("Draw!");
        this._reset();
    }
};

/**     
 * reseting game state
 */
_p._reset = function(){
    this._clearCanvas();
    this._boardModel.reset();
    this._boardRenderer.repaint();
}
/**    
 * filling screen by white color
 */
_p._clearCanvas = function(){
    this._ctx.fillStyle = "#fff";
    this._ctx.fillRect(0,0, this._canvas.width, this._canvas.height);
}