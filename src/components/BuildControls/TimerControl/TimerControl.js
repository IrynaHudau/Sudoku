import React from 'react';
import StopWatch from './StopWatch/StopWatch';
import GameControls from './GameControls/GameControls';

const timerControler = (props) => {
  return(
    <div style={{backgroundColor: '#f1f1f1', margin: '10px', display: 'flex', flexDirection:'row', justifyContent:'space-between'}} >  
      <GameControls  active={props.disabled} clicked={props.startOverHandler} />
      <StopWatch active={props.disabled} />
    </div>
  );
}

export default timerControler;