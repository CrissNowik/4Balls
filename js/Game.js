function Game(canvas) {
    this._boardRect = null;
    this._canvas = canvas;
    this._ctx = canvas.getContext("2d");
    this._boardModel = new BoardModel();
    this._boardRenderer = new BoardRenderer(this._ctx, this._boardModel);
    this.handleResize();
}
_p = Game.prototype;