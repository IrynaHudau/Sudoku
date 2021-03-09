const fieldLength = 9;

const board = [[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]
              ,[0,0,0,0,0,0,0,0,0]];

const gameBoard = [['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']
                  ,['','','','','','','','','']];    

const maxMinRandom = (min,max) => {
    let num = Math.floor((Math.random() * (max - min)) + min);
    return num;
}                

const  findLevel = (levelRange) => {
    let level = 0;

    switch(levelRange){
        case 'easy' :
            level = maxMinRandom(34,25);
            break;
        case 'medium':
            level = maxMinRandom(24,20);
            break;
        case 'hard':
            level = 17;
            break;
        default:
            level= 24;
            break;
    }

    return level;
 }

const randomGenerNumber = (k) => {
    let num = Math.floor((Math.random() * k));
    return num;
}

const cleareBoard = (level) => {

    ///console.log(level);
    let cellCount = fieldLength*fieldLength;
    let countForDeleting = level;

    while (countForDeleting != 0){ 
            let cellId = randomGenerNumber(cellCount); 
  
            let i = parseInt(cellId/9); 
            let j = cellId%9; 
            if (j != 0){
                j = j - 1; 
            }

            if (gameBoard[i][j] == ''){ 
                countForDeleting -= 1; 
                gameBoard[i][j] = board[i][j]; 
            } 
    } 
}
            
const checkNumInRow = (row, numToCheck) => {
    for (let j = 0; j< fieldLength; j++){
        if (board[row][j] == numToCheck){
            return false;
        }          
    }      
    return true; 
}

const checkNumInColmn = (colmn, numToCheck) => {
    for (let i = 0; i < fieldLength; i++){
        if (board[i][colmn] == numToCheck){
            return false; 
        }
    }    
    return true; 
}

const checkNumIn3x3Box = (row, colm, numToCheck) => {
    let rowStart = row - (row%3);
    let colmStart = colm - (colm%3)
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[rowStart+i][colmStart+j] == numToCheck){
                return false;
            }
        }
    }
    return true;
}

const checkIfSafe = (i, j, numToCheck) => { 
    return (checkNumInRow(i, numToCheck) && checkNumInColmn(j, numToCheck) && checkNumIn3x3Box(i,j,numToCheck));
    } 

const fillRemaining = (i,j) => {
    
    if(j >= 9 && i < 9){
        i = i + 1; 
        j = 0; 
    } 
    if(i >= 9 && j >= 9){
        return true; 
    } 
  
    if(i < 3){ 
        if(j < 3){
            j = 3; 
        }
    }else if(i >=3 && i < 6){
        if(j >= 3 && j < 6){
            j =  j + 3; 
        }
    }else{
        if(j >= 6 && j < 9){
            i = i + 1; 
            j = 0;
            if(i >= 9){
                return true;
            }
        }
    }

    for(let numToCheck = 1; numToCheck <= 9; numToCheck++) { 
        
        if(checkIfSafe(i, j, numToCheck)) { 
            board[i][j] = numToCheck; 
            if(fillRemaining(i, j+1))
                return true;
            board[i][j] = 0;
        } 
    }
    return false;  
}

const fillWithRandom = () => {
    let randomBox = [];
    let n = 0;
    while(n < 9){
        let numberRandom = Math.floor((Math.random() * 9) + 1);
        if(!randomBox.includes(numberRandom)){
            randomBox.push(numberRandom);
            n += 1;
        }
    }
    return randomBox;
};

const fillDiagonal = () => {

    let diagonal1 = fillWithRandom();
    //console.log(diagonal1);
        
    let diagonal2 = fillWithRandom();
    //console.log(diagonal2);
     
    let diagonal3 = fillWithRandom();
    //console.log(diagonal3);
    
    let k = 0;
    for(let i = 0; i < fieldLength; i++){
        if(k == 9){
            k = 0;
        }
        if(i < 3 && i >= 0){
            for(let j = 0; j < 3; j++){
                board[i][j] = diagonal1[k];
                k += 1;
            }
        }
        if(i < 6 && i >= 3){
            for(let j = 3; j < 6; j++){
                board[i][j] = diagonal2[k];
                k += 1;
            }
        }
        if(i < 9 && i >= 6){
            for(let j = 6; j < 9; j++){
                board[i][j] = diagonal3[k];
                k += 1;
            }
        }      
    }
}

const fillGameBoard = (levelRange) => {
   
    ///Create diagonal with 3x3
    fillDiagonal();

    // Fill remaining blocks 
    fillRemaining(0, 3);
    
    //Find level range
    let level = findLevel(levelRange)

   // Remove Randomly N digits to make game board ready
    cleareBoard(level); 

    //return board;
    return gameBoard;
};

export default fillGameBoard;