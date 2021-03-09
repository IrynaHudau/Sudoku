import React from 'react';
import Clock from '../TimerControl/Clock/Clock';

const timerControler = (props) => (
    <div style={{backgroundColor: '#f1f1f1', margin: '10px', display: 'flex',justifyContent: 'center'}} >      
      <Clock active={props.disabled} startTimer={props.setTimer}/>
      {/* {console.log(props.setTimer)} */}
    </div>
);

export default timerControler;