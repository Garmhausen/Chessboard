var boardWrapper = document.getElementById('boardDisplay');
var pieces = document.createElement('div');
pieces.setAttribute('id', 'pieces');
var boardMap = document.createElement('div');
boardMap.setAttribute('id', 'boardMap');

function buildBoard() {
  let colArray = ['x', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'x'];
  let rowArray = ['x', 8, 7, 6, 5, 4, 3, 2, 1, 'x'];
  for (var i = 0; i < rowArray.length; i++) {
    let white = false;
    if (rowArray[i] % 2 === 0){
      white = true;
    }
    for (var j = 0; j < colArray.length; j++) {
      let build = document.createElement("div");
      if (colArray[i] === 'x' && rowArray[j] === 'x') {
        console.log("build a corner");
        build.setAttribute("class", "corner");
      } else if (j === 0) {
        console.log("build a left-number of " + rowArray[i]);
        build.setAttribute("class", "left-number");
        build.innerText = rowArray[i];
      } else if (j === 9) {
        console.log("build a right-number of " + rowArray[i]);
        build.setAttribute("class", "right-number");
        build.innerText = rowArray[i];
      } else if (i === 0) {
        console.log("build a top-letter of " + colArray[j]);
        build.setAttribute("class", "top-letter");
        build.innerText = colArray[j];
      } else if (i === 9) {
        console.log("build a bottom-letter of " + colArray[j]);
        build.setAttribute("class", "bottom-letter");
        build.innerText = colArray[j];
      } else {
        console.log("build a space with the id of " + colArray[j] + rowArray[i]);
        if (white) {
          build.setAttribute("class", "wspace");
          white = false;
        } else {
          build.setAttribute("class", "bspace");
          white = true;
        }
        build.setAttribute("id", colArray[j] + rowArray[i]);
      }
      boardWrapper.appendChild(build);
    }
  }
}

function buildBoardMap() {
  
  boardWrapper.appendChild(boardMap);
}

function resetPieces() {

}

buildBoard();
buildBoardMap();
resetPieces();
