function Display() {
  this.targets = {},
  this.rowCount = 6,
  this.columnCount = 7,
  this.numCells = this.rowCount * this.columnCount
}

Display.prototype = {
  renderBoard: function(rowCount, columnCount) {
    document.querySelector(".splash-container").className = "hide"
    // may need to append container change to update class instead of change display
    document.querySelector(".container").style.display = "block"
  },
  renderPiece: function(color) {
    // event.target.className = "show"
    event.target.style.background = color
    // event.target.classList.add("clicked")
  }
}