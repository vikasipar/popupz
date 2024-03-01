import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './index.css';
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Popz = ({theme, type, message, progressBar, direction}) => {
  const dir = direction;
  const [color, setColor] = useState('');
  const [bgcolor, setBgcolor] = useState('');
  const [icon, setIcon] = useState(null);
  
  const themes = {
    light: {
      progessbarBgColor: "#cccccc",
      success: "#00ab66",
      error: "#ff2800",
      warning: "#f4a460",
      info: "#2a52be",
      default: "#eeff1b"
    },
    dark: {
      progessbarBgColor: "#4A5568",
      success: "#32cd32",
      error: "#ff6347",
      warning: "#eee600",
      info: "#6495ed",
      default: "#fdfd96",
    }
  };

  const icons = {
    success: <FaCircleCheck />,
    error: <IoIosCloseCircle />,
    warning: <RiErrorWarningFill />,
    info: <BsFillInfoCircleFill />,
    default: '🍿',
  };

  message= message || "Welcome to Popupz!" ;
  progressBar= progressBar==='true'|| progressBar==='false' ? progressBar : 'true';
  theme= theme in themes? theme : 'light';
  type= (type in themes[theme]) ? type : 'default';

  useEffect(() => {
    if(theme in themes){
        setColor(themes[theme][type]);
        setBgcolor(themes[theme].progessbarBgColor);
    }
    else{
      setColor(themes[theme][type]);
      setBgcolor(themes[theme].progessbarBgColor);
    }
    setIcon(icons[type]);
  }, []);

  return (
    <div className={`popz ${(dir==='tr' || dir==='br')?'popz-right':'popz-left'} ${theme==='light'? 'lightMode': 'darkMode'} ${progressBar==='true' ? 'withProgressBar':'withoutProgressBar'}`}>
        <div className='contentWraper'>
          <span className='icon' style={{color: `${color}`}}>
            {icon}
          </span> 
          <span>{message}</span>
        </div>
        {(progressBar === 'true') && <ProgressBar color={color} bgcolor={bgcolor}/>}
    </div>
  );
}

export default Popz;
