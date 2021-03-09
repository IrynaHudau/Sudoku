
const findCoordinateForNumbers = (data) => {
    let coordinateXY = [];

    data.map((row,rowInd) => {
        row.map((cell, cellInd) => {
            if(cell != ""){
                coordinateXY.push(parseInt(rowInd+''+cellInd));
            }
        })
    });
    return coordinateXY;
};

export default findCoordinateForNumbers;