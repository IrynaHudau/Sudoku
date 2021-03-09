import React,{Component} from 'react';
import cssStyles from '../Clock/Clock.module.css';

class Clock extends  Component{
    constructor(props){
        super(props);
        this.state = {
            secondsElapsed: 0,
            status: false,
        };
    };


    componentWillUnmount() {
        clearInterval(this.incrementer);
        // console.log(this.incrementer);
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
     console.log("status = "+this.state.status);
   }

render(){
    // if(this.props.startTimer){   
    //     this.startTimer();
    // }
    
    return(
        <div className={cssStyles.display}>
            <div className={cssStyles.clock}>
                <h1>{this.getMinutes()}:{this.getSeconds()}:{this.getMilliseconds()}</h1>
            </div>
            <div className={cssStyles.btn_group}>
                <button 
                    className={cssStyles.btn}  
                    style={{color: '#fff', backgroundColor: '#5cb85c'}} 
                    disabled={this.props.active}
                    onClick={this.resetTimer}>Reset
                </button>
                <button 
                    className={cssStyles.btn}  
                    style={{color: '#fff', backgroundColor: '#f0ad4e'}}
                    disabled={this.props.active}
                    onClick={this.state.status ? this.stopTimer : this.startTimer}>
                    {this.state.status ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
}
}

export default Clock;