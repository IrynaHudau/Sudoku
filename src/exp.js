// const board = [[7, 9, 6, 1, 2, 4, 3, 5, 8]
//             ,[3, 2, 5, 7, 6, 8, 4, 1, 9]
//             ,[8, 1, 4, 3, 9, 5, 6, 2, 7]
//             ,[2, 3, 7, 5, 8, 1, 9, 6, 4]
//             ,[1, 5, 9, 6, 4, 3, 7, 8, 2]
//             ,[4, 6, 8, 2, 7, 9, 1, 3, 5]
//             ,[5, 4, 3, 9, 1, 2, 8, 7, 6]
//             ,[6, 8, 1, 4, 5, 7, 2, 9, 3]
//             ,[9, 7, 2, 8, 3, 6, 5, 4, 1]];

// const gameBoard = [['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']
// ,['','','','','','','','','']];

const data = [["", 4, "", "", 2, "", "", 5, ""]
,[8, "", 1, 7, "", "", 4, "", ""]
,["", "", 9, "", 4, "", "", "", ""]
,[1, "", "", "", "", "", 6, "", ""]
,[2, "", "", "", "", 7, "", "", ""]
,[9, "", 8, "", "", "", "", "", ""]
,["", "", "", "", 7, 5, 3, "", ""]
,[7, "", 2, "", "", 8, "", 9, ""]
,["", "", "", 2, "", 4, "", "", ""]];


const findCoordinateForNumbers = () =>{

    let coordinateXY = [];

    data.map((row,rowInd) => {
        row.map((cell, cellInd) => {
            if(cell != ""){
                coordinateXY.push(rowInd+''+cellInd);
            }
        })
    });


    return coordinateXY;
};

console.log(findCoordinateForNumbers());

///GET ROW FROM BOARD
// const getRow = (rowNum) => {
//     for(let ind = 0; ind < board.length; ind++){
//         if(ind == rowNum){
//             return board[ind];
//         }
//     }
// };
///GET COLUMN FROM BOARD
// const getColumn = (columNum) =>{
//     let colum = [];
//     for(let indRow = 0; indRow < board.length; indRow++){
//         for(let indCol = 0; indCol < board.length; indCol++){
//             if(columNum == indCol){
//                 colum.push(board[indRow][indCol]);
//             }
//         }
//     }
//     return colum;
// };

//////CHEKING ROW VALIDITY
// const validRow = (rowNum) => {
//     let row = getRow(rowNum);
//     let duplArr = row.filter((value, index, self) => self.indexOf(value) !== index && value !== '.'); 
//     if(duplArr.length == 0){
//       return true;
//     }
//     return false;
// }

//////CHEKING COLUMN VALIDITY
// const validColumn = (columNum) => {
//     let colum = getColumn(columNum);
//     let duplArr = colum.filter((value, index, self) => self.indexOf(value) !== index && value !== '.'); 
//     if(duplArr.length == 0){
//        return true;
//      }
//     return false;
// }

////////CHEKING ONE 3X3 SUB-BOXES FILD VALIDITY
// const checkValidity3x3 = (rowNum,columNum) => {
//     let array3x3 = [];
//     let jStart = 0;
//     let iStart = 0;

//     if(rowNum > 2 && rowNum <= 5){
//         iStart = 3;
//     }else if(rowNum > 5){
//         iStart = 6;
//     }

//     if(columNum > 2 && columNum <= 5){
//         jStart = 3;
//     }else if(columNum > 5){
//         jStart = 6;
//     }

//     for(let i = iStart; i < (iStart+3); i++){
//         for(let j = jStart; j < (jStart+3); j++){
//             if(board[i][j] !== '.'){
//                 array3x3.push(board[i][j]);
//             }
//         }
//     }
//     return array3x3;
// }

////////CHEKING ALL 3X3 FILDS VALIDITY
// const valid3x3 = () => {
//     const step = [0,3,6];
//     for(let i = 0; i < step.length; i++){
//         for(let j = 0; j < step.length; j++){
//             let duplArr = checkValidity3x3(step[i],step[j]).filter((value, index, self) => self.indexOf(value) !== index); 
//             if(duplArr.length !== 0){
//                 return false;
//              }
//         }
//     }
//    return true;
// } 

//////GIVE VALIDITY OF ALL BOARD BY ALL RULES
// const ckeckValidity = () => {
//     let msg = "";
//     for(let i = 0; i < board.length; i++){
//         if(!validRow(i)){
//             msg = "Error in rows, some rows/row contain the digits 1-9 with repetition";
//             return msg;
//             //return false;//"Error in rows, some rows/row contain the digits 1-9 with repetition"
//         }
//         if(!validColumn(i)){
//             msg = "Error in columns, some columns/column contain the digits 1-9 with repetition";
//             return msg;
//             //return false;//"Error in columns, some columns/column contain the digits 1-9 with repetition"
//         }  
//     }

//     if(!valid3x3()){
//         msg = "Error in 3x3 sub-boxes, 3x3 sub-boxes of the grid contain the digits 1-9 with repetition";
//         return msg;
//         //return false;//"Error in 3x3 sub-boxes, 3x3 sub-boxes of the grid contain the digits 1-9 with repetition"
//     }
//     return msg;
//    // return true; ///Board is valid
// }

// //CHECK IF SOME CELL IS EMPTY
// const checkEmptyCells = () => {

//     for(let row = 0; row < board.length; row++){
//         if(getRow(row).includes("")){
//             return true;
//         }
//     }
//     return false;
// };

// const checkPuzzleSoved = () => {

//     let message = " ";
//     //console.log(checkEmptyCells());

//     if(checkEmptyCells()){
//         message = 'There are some empty spots on board';
//     }else{
//         if(ckeckValidity() == ""){
//             message = 'Puzzle done!';
//         }else{
//             message = ckeckValidity();
//         }
//     }
//     return message;

// };

// console.log(checkPuzzleSoved());




