///GET ROW FROM BOARD
const getRow = (board,rowNum) => {
    for(let ind = 0; ind < board.length; ind++){
        if(ind == rowNum){
            return board[ind];
        }
    }
};
///GET COLUMN FROM BOARD
const getColumn = (board, columNum) =>{
    let colum = [];
    for(let indRow = 0; indRow < board.length; indRow++){
        for(let indCol = 0; indCol < board.length; indCol++){
            if(columNum == indCol){
                colum.push(board[indRow][indCol]);
            }
        }
    }
    return colum;
};

//////CHEKING ROW VALIDITY
const validRow = (board,rowNum) => {
    let row = getRow(board, rowNum);
    let duplArr = row.filter((value, index, self) => self.indexOf(value) !== index && value !== '.'); 
    if(duplArr.length == 0){
      return true;
    }
    return false;
}

//////CHEKING COLUMN VALIDITY
const validColumn = (board,columNum) => {
    let colum = getColumn(board,columNum);
    let duplArr = colum.filter((value, index, self) => self.indexOf(value) !== index && value !== '.'); 
    if(duplArr.length == 0){
       return true;
     }
    return false;
}

////////CHEKING ONE 3X3 SUB-BOXES FILD VALIDITY
const checkValidity3x3 = (board,rowNum,columNum) => {
    let array3x3 = [];
    let jStart = 0;
    let iStart = 0;

    if(rowNum > 2 && rowNum <= 5){
        iStart = 3;
    }else if(rowNum > 5){
        iStart = 6;
    }

    if(columNum > 2 && columNum <= 5){
        jStart = 3;
    }else if(columNum > 5){
        jStart = 6;
    }

    for(let i = iStart; i < (iStart+3); i++){
        for(let j = jStart; j < (jStart+3); j++){
            if(board[i][j] !== '.'){
                array3x3.push(board[i][j]);
            }
        }
    }
    return array3x3;
}

////////CHEKING ALL 3X3 FILDS VALIDITY
const valid3x3 = (board) => {
    const step = [0,3,6];
    for(let i = 0; i < step.length; i++){
        for(let j = 0; j < step.length; j++){
            let duplArr = checkValidity3x3(board, step[i],step[j]).filter((value, index, self) => self.indexOf(value) !== index); 
            if(duplArr.length !== 0){
                return false;
             }
        }
    }
   return true;
} 

//////GIVE VALIDITY OF ALL BOARD BY ALL RULES
const ckeckValidity = (board) => {
    let msg = "";
    for(let i = 0; i < board.length; i++){
        if(!validRow(board,i)){
            msg = "Error in rows, some rows/row contain the digits 1-9 with repetition";
            return msg;
            //return false;//"Error in rows, some rows/row contain the digits 1-9 with repetition"
        }
        if(!validColumn(board,i)){
            msg = "Error in columns, some columns/column contain the digits 1-9 with repetition";
            return msg;
            //return false;//"Error in columns, some columns/column contain the digits 1-9 with repetition"
        }  
    }

    if(!valid3x3(board)){
        msg = "Error in 3x3 sub-boxes, 3x3 sub-boxes of the grid contain the digits 1-9 with repetition";
        return msg;
        //return false;//"Error in 3x3 sub-boxes, 3x3 sub-boxes of the grid contain the digits 1-9 with repetition"
    }
    return msg;
   // return true; ///Board is valid
}

//CHECK IF SOME CELL IS EMPTY
const checkEmptyCells = (board) => {

    for(let row = 0; row < board.length; row++){
        if(getRow(board,row).includes("")){
            return true;
        }
    }
    return false;
};

const checkPuzzleSoved = (data) => {

    let message = "";

    // if(checkEmptyCells(data)){
    //     message = 'There are some empty spots on board';
    // }else{
        if(ckeckValidity(data) == ""){
            message = 'Puzzle done!';
        }else{
            message = ckeckValidity(data);
        }
    // }
    return message;
};

export default checkPuzzleSoved;




