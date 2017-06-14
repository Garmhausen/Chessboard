var boardWrapper = document.getElementById('boardDisplay');
var pieces = {};
var boardMap = {};

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
        build.setAttribute("class", "corner");
      } else if (j === 0) {
        build.setAttribute("class", "left-number");
        build.innerText = rowArray[i];
      } else if (j === 9) {
        build.setAttribute("class", "right-number");
        build.innerText = rowArray[i];
      } else if (i === 0) {
        build.setAttribute("class", "top-letter");
        build.innerText = colArray[j];
      } else if (i === 9) {
        build.setAttribute("class", "bottom-letter");
        build.innerText = colArray[j];
      } else {
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

  // board square locations by x and y coords.  Maybe move into above loop??
  boardMap.xa = '1.6vw';
  boardMap.xb = '9.5vw';
  boardMap.xc = '17.6vw';
  boardMap.xd = '25.6vw';
  boardMap.xe = '33.8vw';
  boardMap.xf = '41.8vw';
  boardMap.xg = '49.7vw';
  boardMap.xh = '57.8vw';
  boardMap.y8 = '1.6vw';
  boardMap.y7 = '9.5vw';
  boardMap.y6 = '17.6vw';
  boardMap.y5 = '25.6vw';
  boardMap.y4 = '33.8vw';
  boardMap.y3 = '41.8vw';
  boardMap.y2 = '49.7vw';
  boardMap.y1 = '57.8vw';
}

function resetPieces() {

  document.getElementById('bqrook').style.transform = "translate(" + boardMap.xa + ", " + boardMap.y8 + ")";
  document.getElementById('bqknight').style.transform = "translate(" + boardMap.xb + ", " + boardMap.y8 + ")";
  document.getElementById('bqbishop').style.transform = "translate(" + boardMap.xc + ", " + boardMap.y8 + ")";
  document.getElementById('bqueen').style.transform = "translate(" + boardMap.xd + ", " + boardMap.y8 + ")";
  document.getElementById('bking').style.transform = "translate(" + boardMap.xe + ", " + boardMap.y8 + ")";
  document.getElementById('bkbishop').style.transform = "translate(" + boardMap.xf + ", " + boardMap.y8 + ")";
  document.getElementById('bkknight').style.transform = "translate(" + boardMap.xg + ", " + boardMap.y8 + ")";
  document.getElementById('bkrook').style.transform = "translate(" + boardMap.xh + ", " + boardMap.y8 + ")";

  document.getElementById('bapawn').style.transform = "translate(" + boardMap.xa + ", " + boardMap.y7 + ")";
  document.getElementById('bbpawn').style.transform = "translate(" + boardMap.xb + ", " + boardMap.y7 + ")";
  document.getElementById('bcpawn').style.transform = "translate(" + boardMap.xc + ", " + boardMap.y7 + ")";
  document.getElementById('bdpawn').style.transform = "translate(" + boardMap.xd + ", " + boardMap.y7 + ")";
  document.getElementById('bepawn').style.transform = "translate(" + boardMap.xe + ", " + boardMap.y7 + ")";
  document.getElementById('bfpawn').style.transform = "translate(" + boardMap.xf + ", " + boardMap.y7 + ")";
  document.getElementById('bgpawn').style.transform = "translate(" + boardMap.xg + ", " + boardMap.y7 + ")";
  document.getElementById('bhpawn').style.transform = "translate(" + boardMap.xh + ", " + boardMap.y7 + ")";


  document.getElementById('wapawn').style.transform = "translate(" + boardMap.xa + ", " + boardMap.y2 + ")";
  document.getElementById('wbpawn').style.transform = "translate(" + boardMap.xb + ", " + boardMap.y2 + ")";
  document.getElementById('wcpawn').style.transform = "translate(" + boardMap.xc + ", " + boardMap.y2 + ")";
  document.getElementById('wdpawn').style.transform = "translate(" + boardMap.xd + ", " + boardMap.y2 + ")";
  document.getElementById('wepawn').style.transform = "translate(" + boardMap.xe + ", " + boardMap.y2 + ")";
  document.getElementById('wfpawn').style.transform = "translate(" + boardMap.xf + ", " + boardMap.y2 + ")";
  document.getElementById('wgpawn').style.transform = "translate(" + boardMap.xg + ", " + boardMap.y2 + ")";
  document.getElementById('whpawn').style.transform = "translate(" + boardMap.xh + ", " + boardMap.y2 + ")";

  document.getElementById('wqrook').style.transform = "translate(" + boardMap.xa + ", " + boardMap.y1 + ")";
  document.getElementById('wqknight').style.transform = "translate(" + boardMap.xb + ", " + boardMap.y1 + ")";
  document.getElementById('wqbishop').style.transform = "translate(" + boardMap.xc + ", " + boardMap.y1 + ")";
  document.getElementById('wqueen').style.transform = "translate(" + boardMap.xd + ", " + boardMap.y1 + ")";
  document.getElementById('wking').style.transform = "translate(" + boardMap.xe + ", " + boardMap.y1 + ")";
  document.getElementById('wkbishop').style.transform = "translate(" + boardMap.xf + ", " + boardMap.y1 + ")";
  document.getElementById('wkknight').style.transform = "translate(" + boardMap.xg + ", " + boardMap.y1 + ")";
  document.getElementById('wkrook').style.transform = "translate(" + boardMap.xh + ", " + boardMap.y1 + ")";
}

function buildPieces() {

  pieces.nameArrayBlack = ['bqrook', 'bqknight', 'bqbishop', 'bqueen', 'bking', 'bkbishop', 'bkknight', 'bkrook', 'bapawn', 'bbpawn', 'bcpawn', 'bdpawn', 'bepawn', 'bfpawn', 'bgpawn', 'bhpawn'];
  pieces.nameArrayWhite = ['wapawn', 'wbpawn', 'wcpawn', 'wdpawn', 'wepawn', 'wfpawn', 'wgpawn', 'whpawn', 'wqrook', 'wqknight', 'wqbishop', 'wqueen', 'wking', 'wkbishop', 'wkknight', 'wkrook'];

  for (var i = 0; i < pieces.nameArrayBlack.length; i++) {
    // set attributes
    let build = document.createElement('img');
    build.setAttribute('class', 'piece');
    build.setAttribute('id', pieces.nameArrayBlack[i]);

    // find correct image based on name
    if (pieces.nameArrayBlack[i] === 'bqrook' || pieces.nameArrayBlack[i] === 'bkrook') {
      build.setAttribute('src', 'images/br.png');
    } else if (pieces.nameArrayBlack[i] === 'bqknight' || pieces.nameArrayBlack[i] === 'bkknight') {
      build.setAttribute('src', 'images/bn.png');
    } else if (pieces.nameArrayBlack[i] === 'bqbishop' || pieces.nameArrayBlack[i] === 'bkbishop') {
      build.setAttribute('src', 'images/bb.png');
    } else if (pieces.nameArrayBlack[i] === 'bqueen') {
      build.setAttribute('src', 'images/bq.png');
    } else if (pieces.nameArrayBlack[i] === 'bking') {
      build.setAttribute('src', 'images/bk.png');
    } else {
      build.setAttribute('src', 'images/bp.png');
    }

    boardWrapper.appendChild(build);
  }

  for (var i = 0; i < pieces.nameArrayWhite.length; i++) {
    // set attributes
    let build = document.createElement('img');
    build.setAttribute('class', 'piece');
    build.setAttribute('id', pieces.nameArrayWhite[i]);

    // find correct image based on name
    if (pieces.nameArrayWhite[i] === 'wqrook' || pieces.nameArrayWhite[i] === 'wkrook') {
      build.setAttribute('src', 'images/wr.png');
    } else if (pieces.nameArrayWhite[i] === 'wqknight' || pieces.nameArrayWhite[i] === 'wkknight') {
      build.setAttribute('src', 'images/wn.png');
    } else if (pieces.nameArrayWhite[i] === 'wqbishop' || pieces.nameArrayWhite[i] === 'wkbishop') {
      build.setAttribute('src', 'images/wb.png');
    } else if (pieces.nameArrayWhite[i] === 'wqueen') {
      build.setAttribute('src', 'images/wq.png');
    } else if (pieces.nameArrayWhite[i] === 'wking') {
      build.setAttribute('src', 'images/wk.png');
    } else {
      build.setAttribute('src', 'images/wp.png');
    }

    boardWrapper.appendChild(build);
  }
}

buildBoard();   // build the game board DOM tree...
buildPieces();  // create the piece elements and append them to the wrapper...
resetPieces();  // get starting locations for the pieces
