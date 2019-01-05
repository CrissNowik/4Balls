function BoardRenderer(context, model) {
    this._ctx = context;
    this._model = model;

    this._cols = model.getCols();
    this._rows = model.getRows();

//left top board corner
    this._x = 0;
    this._y = 0;

// board square size
    this._width = 0;        
    this._heigth = 0;
    this._cellSize = 0;
}   

_p = BoardRenderer.prototype;
/** 
 * change board size and position
    * @ param x - left top x coordinate
    * @ param y - left top y coordinate
    * @ param cellSize - optimum cell size
*/

_p.setSize = function (x, y, cellSize) {
    this._x = x;
    this._y = y;
    this.cellSize = cellSize;
    this._width = this._cellSize*this._cols;
    this._heigth = this._cellSize*this.rows;
}