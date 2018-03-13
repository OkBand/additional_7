module.exports = function solveSudoku(matrix) {
function findEmptyCells(matrix) {
  var emptyCells = []; //Storing zero positions from the matrix
  for(var i = 0; i < 9; i++) { //Iterating rows
    for(var j = 0; j < 9; j++) { //Iterating columns
      if(matrix[i][j] === 0) { //If the number = 0 push coordinates to the array of empty cells
        emptyCells.push([i, j]); //coordinates of empty cells (x,y)
      };
    };
  };
  return emptyCells;
};

function checkRow(matrix, row, number) { //Checking rules for a row
  for(var i = 0; i < 9; i++) {
    if(matrix[row][i] === number) {
      return false;
    };
  };
  return true;
};

function checkCol(matrix, col, number) { //Checking rules for a column
  for(var i = 0; i < 9; i++) {
    if(matrix[i][col] === number) {
      return false;
    };
  };
  return true;
};

function checkSquare(matrix, col, row, number) { //Checking rules for a 3x3 square
  var yZero = 0; //where the 3x3 square starts Y-axis
  var xZero = 0; //where the 3x3 square starts X-axis

  if(col > 2 && col <6) {
    yZero = 3
  }

  else if(col >= 6) {
    yZero = 6;
  };

  if(row > 2 && row <6) {
    xZero = 3
  }

  else if(row >= 6) {
    xZero = 6;
  };

  for(var i = xZero; i < xZero + 3; i++) {
    for(var j = yZero; j < yZero + 3; j++) {
      if(matrix[i][j] === number) {
        return false;
      };
    };
  };
  return true;
};

var emptyCells = findEmptyCells(matrix);
var i, row, col, number, solved;
var length = emptyCells.length;
for(i = 0; i < length;) {
  row = emptyCells[i][0];
  col = emptyCells[i][1];
  number = matrix[row][col] + 1;
  solved = false;
  while(solved === false) {
    if(checkRow(matrix, row, number) && checkCol(matrix, col, number) && checkSquare(matrix, col, row, number)) {
      solved = true;
      matrix[row][col] = number;
      i++;
    }
    else {
      number++;
    }
  };
  if(solved === false) {
    matrix[row][col] = 0;
    i--;
  };
};
return matrix;
}
