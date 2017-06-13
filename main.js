var boardWrapper = document.getElementById('boardDisplay');
var pieces = {};
var boardMap = {};
boardMap.xa = '25px';
boardMap.xb = '105px';
boardMap.xc = '185px';
boardMap.xd = '265px';
boardMap.xe = '345px';
boardMap.xf = '425px';
boardMap.xg = '505px';
boardMap.xh = '585px';
boardMap.y8 = '25px';
boardMap.y7 = '105px';
boardMap.y6 = '185px';
boardMap.y5 = '265px';
boardMap.y4 = '345px';
boardMap.y3 = '425px';
boardMap.y2 = '505px';
boardMap.y1 = '585px';


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

function resetPieces() {
  // create each piece as an image and give it a starting location
  // append each piece to the boardWrapper.  position should be absolute.
  pieces.bqRook = document.createElement('img');
  pieces.bqRook.setAttribute('class', 'piece');
  pieces.bqRook.setAttribute('src', 'images/br.png');
  pieces.bqRook.style.left = boardMap.a8x;
  pieces.bqRook.style.top = boardMap.a8y;
  // let location = boardMap.a8x + ", " + boardMap.a8y;
  // pieces.bqRook.style.transform = "translate" + location;

  boardWrapper.appendChild(pieces.bqRook);
}

buildBoard();
buildBoardMap();
resetPieces();
