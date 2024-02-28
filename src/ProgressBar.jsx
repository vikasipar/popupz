import React from 'react';
import './App.css';

function ProgressBar({color, bgcolor}) {
    
  const progressBarStyle = {
    width: '100%',
    height: '4px',
    background:
    `linear-gradient(${color} 0 0) 0/0% no-repeat ${bgcolor}`,
    animation: 'l1 3.0s linear',
  }
  return (
    <div>
        <div className='loader mt-3 rounded-3xl' style={progressBarStyle}></div>
    </div>
  )
}

export default ProgressBar;