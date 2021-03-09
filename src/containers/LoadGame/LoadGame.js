import React,{Component} from 'react';
import cssStyles from '../LoadGame/LoadGame.module.css';

import GameField from '../../components/GameField/GameField';
import NumbersControl from '../../components/BuildControls/NumberControl/NumbersControl';

import StartModal from '../../components/Modals/StartModal/StartModal';
import WarningEmptyCellPopUp from '../../components/Popups/WarningEmptyCell';
import WinnerModal from '../../components/Modals/EndModal/WinnerModal';
import LuserModal from '../../components/Modals/EndModal/LuserModal';

import fillGameBoard from '../FillGameField/FillGameField';
import findCoordinateForNumbers from '../FillGameField/FindCoordinateForNumbers';
import checkEmptyCells from '../PuzzleSolved/CheckEmptyCells';
import checkPuzzleSolved from '../PuzzleSolved/CheckPuzzleSolved';

import TimerControl from '../../components/BuildControls/TimerControl/TimerControl';

const initData = [[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]
                 ,[0,0,0,0,0,0,0,0,0]];

class LoadGame extends Component{
    constructor(props){
        super(props);
        this.state = {
            showStartModal: false,
            showPopup: false,
            fieldData : [],
            notActivCellXY: [],
            level : '',
            selectedNumber : 0,
            activeNum: null,
            endGameMsg : '',
            showEndModal: false,
            setTimer:false,
        };
    };

    componentDidMount() {
        this.setState({ showStartModal : true});
        this.setState({fieldData:initData});
    }

    handleClose = () => {
        this.setState({showModal:false});
    };

    startGameHandler = (selectedLevel) => {
        this.setState({showStartModal:false});
        switch(selectedLevel){
            case 'easy' :
                this.setState({level: 'easy'});
                break;
            case 'medium':
                this.setState({level:'medium'});
                break;
            case 'hard':
                this.setState({level:'hard'});
                break;
            default:
                this.setState({level:'medium'});
                break;
        }
        console.log(" GAME START ");
        let data = fillGameBoard(this.state.level);
        let coordinateXY = findCoordinateForNumbers(data);
        this.setState({fieldData: data, notActivCellXY: coordinateXY});

        this.setState({setTimer: true});
        setTimeout(function(){
             this.setState({setTimer:false});
        }.bind(this),1000);
    }


    selectNumberHandler = (numb) => {
        this.setState({ activeNum: numb ,selectedNumber:numb});
    };

    openPopupHandler = () => {
        this.setState({showPopup: true});
      }
      
    closePopupHandler = () => {
        this.setState({showPopup: false});
      }

    selectGameFieldCellHandler = (event) =>{
        if(this.state.selectedNumber == '0'){
            console.log("Warning");
            this.openPopupHandler();
        }else{
            this.setState(oldState =>{
                let updatedData = oldState.fieldData;
                let coordinate = event.target.id;
                let x = parseInt(coordinate/10);
                let y = coordinate%10;
                updatedData[x][y] = this.state.selectedNumber;
                let checkAllCellsFill = checkEmptyCells(updatedData);
                if(!checkAllCellsFill){
                    console.log("Game Over");
                    let checkValityFill = checkPuzzleSolved(updatedData);
                    return{
                        fieldData:updatedData,
                        showEndModal:true,
                        endGameMsg:checkValityFill
                    }
                }
                return{
                    fieldData:updatedData
                };
            });
        }
    };

    startOverHandler = () => {
        window.location.reload(false);
    };

    render(){
        let startTimer = false;
        const enable = this.state.level != 0  &&  this.state.showStartModal == false;
      
        if(enable){
            startTimer = true;
        }
        // console.log(startTimer);

        let popup = null;
        if(this.state.showPopup){
            popup = (<WarningEmptyCellPopUp handleClose={this.closePopupHandler}/>);   
        }
        let gameEnd = null;
        if(this.state.endGameMsg == 'Puzzle done!'){
            gameEnd = (<WinnerModal show={this.state.showEndModal} startOverHandler={this.startOverHandler} value={this.state.endGameMsg}/>);
        }else{
            gameEnd = (<LuserModal show={this.state.showEndModal} startOverHandler={this.startOverHandler} value={this.state.endGameMsg}/>);
        }
        
        return(
            <div className={cssStyles.row}>
                <div className={cssStyles.main}>
                    {popup}
                    {gameEnd}
                    <StartModal 
                        show={this.state.showStartModal} 
                        onHide={this.handleClose} 
                        backdrop="static" 
                        // calcelledGame={this.calcelGameHandler}
                        startGame={this.startGameHandler}
                    />           
                    <TimerControl disabled={!enable} setTimer={this.state.setTimer}/>
                    <GameField disabled={!enable} data={this.state.fieldData} cell={this.selectGameFieldCellHandler} nonActiveCells={this.state.notActivCellXY}/>
                    <NumbersControl disabled={!enable} clicked={this.selectNumberHandler} activeNum={this.state.activeNum}/>
                </div>
            </div>
        );
    }
}

export default LoadGame;