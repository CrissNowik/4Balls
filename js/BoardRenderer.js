/**
 * board view - class responsible for drawing game state
 * @param context 2d context for drawing
 * @param model board model used
 */

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
 * redraw background, grid and dots
*/
_p.repaint = function () {
    this._ctx.save();    
    this._ctx.translate(this._x, this._y);
    this._drawBackground();
    this._drawGrid();
    this._ctx.restore();
    
    for (let i = 0; i < this._cols; i++) {
        for (let j = 0; j < this._rows; j++) {
            this.drawToken(i,j);        
        }  
    }
};
/**
 * draw background of the game - with linear gradient and curves
 */
_p._drawBackground = function(){
    let ctx = this._ctx;

// background
    let gradient = ctx.createLinearGradient(0,0,0, this._heigth);
    gradient.addColorStop(0, '#fffbb3');
    gradient.addColorStop(1, '#c6c602');
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0, this._width, this._height);
// curves on background
    let co = this._width/6; // curve move
    ctx.stroke = "#dad7ac";
    ctx.fillStyle = "#f6f6b2";

// first curve
    ctx.beginPath();
    ctx.moveTo(co, this._height);
    ctx.bezierCurveTo(this._width + co*3, -co, -co*3, -co, this._width - co, this._height);
    ctx.fill();

// second curve
    ctx.beginPath();
    ctx.moveTo(co, 0);
    ctx.bezierCurveTo(this._width + co*3, this._height + co, -co*3, -co, this._height + co, this._width - co, 0);
    ctx.fill();
};
/**
 * draw game grid
 */
_p._drawGrid = function(){
    let ctx = this._ctx;
    ctx.beginPath();
// drawing vertical lines
    for (let i = 0; i <= this._cols; i++) {
        ctx.moveTo(i*this._cellSize + 0.5, 0.5);
        ctx.lineTo(i*this._cellSize + 0.5, this._height + 0.5);                
    }
// drawing horizontal lines
    for (let j = 0; j <= this._rows; j++) {
        ctx.moveTo(0.5, j*this._cellSize + 0.5);
        ctx.lineTo(this._width + 0.5, j*this._cellSize + 0.5 );                
    }
// draw outline
    ctx.strokeStyle = "#CCC";
    ctx.stroke = "#000";
};
/**
 * draw single dot with gradient
 * @param cellX - coordinate X of the cell
 * @param cellY - coordinate Y of the cell
 */
_p.drawToken = function (cellX, cellY) {
    let ctx = this._ctx;
    let cellSize = this._cellSize;
    let tokenType = this._model.getPiece(cellX, cellY);

    if (!tokenType)
        return;

    let color = "#fff";
    switch (tokenType) {
        case BoardModel.BLACK:
            color = "#000";
            break;
        case BoardModel.WHITE:
            color = "#7f796c";
            break;
    }
// gradient of dots
    // dots center
    let x = this._x + (cellX + 0.5) * cellSize;
    let y = this._y + (cellY + 0.5) * cellSize;
    ctx.save();
    ctx.translate(x,y);

    let radius = cellSize * 0.4;

    // gradient center
    let gradientX = cellSize * 0.1;
    let gradientY = - cellSize * 0.1;

    let gradient = ctx.createRadialGradient(
        gradientX, gradientY, cellSize*0.1, // inner circle
        gradientX, gradientY, radius*1.2);  // outer circle

    gradient.addColorStop(0, "yellow");     // light
    gradient.addColorStop(1, color);        // dot color
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.restore();
};

/** 
 * change board size and position
    * @ param x - left top x coordinate
    * @ param y - left top y coordinate
    * @ param cellSize - optimum cell size
*/

_p.setSize = function (x, y, cellSize) {
    this._x = x;
    this._y = y;
    this._cellSize = cellSize;
    this._width = this._cellSize*this._cols;
    this._heigth = this._cellSize*this.rows;
};