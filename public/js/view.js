function Display() {
  this.targets = {},
  this.rowCount = 6,
  this.columnCount = 7,
  this.numCells = this.rowCount * this.columnCount
}

Display.prototype = {
  renderBoard: function(rowCount, columnCount) {
    document.querySelector(".container").style.display = "block"
  },
  renderPiece: function() {

    console.log(event.target)
    event.target.style.background = "red"
  }
}