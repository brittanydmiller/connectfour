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
    document.querySelector(".dropzone").style.visibility = "visible"
    document.querySelector("#gravatar").style.display = "block"
  },

  renderPiece: function(id, background) {
    lowestElementInRow = $('#' + id);
    console.log(lowestElementInRow)
    lowestElementInRow.css('background', 'url('+ background + ')');
    // event.target.style.background = color
  },

  renderWinner: function(player) {
    document.querySelector(".dropzone").className = "hide"
    document.querySelector("#gravatar").className = "hide"
    document.querySelector("#winner").style.display = "block"
    document.querySelector(".winner-text").innerHTML = '<i class="fa fa-comments-o"></i> ' + player.name + " wins"
  }
}