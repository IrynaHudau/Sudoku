import React from 'react';
import styleClass from '../GameField/GameField.module.css';

const gamefield = (props) => {
    const tableCell = [];

    props.data.map((row, indR) => {
        let cell = [];
        row.map((elm, indC) => {
            let xy = parseInt(indR+''+indC);
            if(props.nonActiveCells.includes(xy)){
                cell.push(            
                    <th key={indR+''+indC} id={indR+''+indC} className ={styleClass.cell_style} style={{backgroundColor:'rgb(248, 248, 245)'}}>
                        {elm}
                    </th>
                );
            }else{
                cell.push(            
                    <th key={indR+''+indC} id={indR+''+indC} className ={styleClass.cell_style} onClick={props.cell}>
                            {elm}
                    </th>
                );
            }
        });
            tableCell.push(<tr key={indR} id={indR} >{cell}</tr>);
    });
    return (
        <div style={{display: 'flex',justifyContent: 'center'}}>
            <table className ={styleClass.style} style={props.disabled ? {pointerEvents: 'none'} : {pointerEvents: 'auto'}}>
                <tbody>
                    {tableCell}
                </tbody>
            </table>
        </div>
    );
};

export default gamefield;