import React,{Component} from 'react';
import cssStyles from '../StartModal/StartModal.module.css';

class startModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            valueLevel: " "
        }
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    c = (event) => {
        let level = event.target.value;
        this.setState({valueLevel: level});
    }
    
    render(){
        return(
            <div className={cssStyles.start_modal} style={{
                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: this.props.show ? '1' : '0'
            }}>
                <h3>Welcom to The SUDOKU GAME!</h3>
                <p>Here are some simple rules:</p>
                <ol>
                    <li>Each row must contain the digits 1-9 without repetition.</li>
                    <li>Each column must contain the digits 1-9 without repetition.</li>
                    <li>Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.</li>
                </ol>
                
                    <p>Pick any level</p>
                    <select id = "select" onChange={this.selectHandler}>
                        <option value="">--Please choose a level--</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <button type="Start" onClick={() => this.props.startGame(this.state.valueLevel)}>Start Game</button>
                    {/* <button type="Calcel" onClick={this.props.calcelledGame}>Close</button> */}
            </div>
        );
    }
}

export default startModal;