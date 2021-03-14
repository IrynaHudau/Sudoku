import React,{Component} from 'react';
import cssStyles from '../StopWatch/StopWatch.module.css';

class StopWatch extends  Component{
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            status: false,
        };
    };

    componentWillUnmount = () =>{
        clearInterval(this.incrementer);
    }

    getMilliseconds = () => {
        return ('0' +this.state.secondsElapsed * 100).slice(-2);
    }

    getSeconds = () => {
        return ('0' + parseInt(this.state.secondsElapsed % 60)).slice(-2);
    }

    getMinutes = () => {
        return ('0' + Math.floor(this.state.secondsElapsed / 60)).slice(-2);
    }

    startTimer = () => {
        let runningTime = this;
        this.incrementer = setInterval(
            () => {
          runningTime.setState({secondsElapsed: (runningTime.state.secondsElapsed + 0.01), status: true})
        });

        console.log("status = "+this.state.status);
    }

   resetTimer = () =>  {
    this.setState({secondsElapsed: 0, status: false});
   }

   stopTimer = () => {
     clearInterval(this.incrementer);
     this.setState({status: false});
   }

render(){
    return(
        <div className={cssStyles.display} >
            <div className={cssStyles.clock}>
                <h1  >{this.getMinutes()}:{this.getSeconds()}:{this.getMilliseconds()}</h1>
            </div>
            <div className={cssStyles.btn_group}>
                <button 
                    className={cssStyles.btn}  
                    style={{backgroundImage: 'radial-gradient(circle, #5cb85c, #81c281, green)'}}
                   // style={{color: '#fff', backgroundColor: '#5cb85c'}} 
                    disabled={this.props.active}
                    onClick={this.resetTimer}>Reset
                </button>
                <button 
                    className={cssStyles.btn}  
                    style={{backgroundImage: 'radial-gradient(circle, #ec971f, #ecb261, rgb(230, 150, 1))'}}
                    disabled={this.props.active}
                    onClick={this.state.status ? this.stopTimer : this.startTimer}>
                    {this.state.status ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
}
}

export default StopWatch;