///GET ROW FROM BOARD
const getRow = (board, rowNum) => {
    for(let ind = 0; ind < board.length; ind++){
        if(ind == rowNum){
            return board[ind];
        }
    }
};

//CHECK IF SOME CELL IS EMPTY
const checkEmptyCells = (board) => {

    for(let row = 0; row < board.length; row++){
        if(getRow(board, row).includes("")){
            return true;
        }
    }
    return false;
};

export default checkEmptyCells;

