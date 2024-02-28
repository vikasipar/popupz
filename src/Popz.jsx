import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './App.css';
import { FaCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Popz = ({theme, type, message, progressBar}) => {
  message= message || "Welcome to Popupz!" ;
  progressBar= progressBar || 'true';
  theme= theme || 'dark';
  type= type || 'default';

  const [mood, setMood] = useState('');
  const [color, setColor] = useState('');
  const [bgcolor, setBgcolor] = useState('');
  const [icon, setIcon] = useState(null);
  
  const themes = {
    light: {
      colors: "text-gray-950 bg-white/80",
      progessbarBgColor: "#cccccc",
      success: "#00ab66",
      error: "#ff2800",
      warning: "#f4a460",
      info: "#2a52be",
      default: "#eeff1b"
    },
    dark: {
      colors: "text-white bg-gray-800/80",
      progessbarBgColor: "#4A5568",
      success: "#7cfc00",
      error: "#Ff000d",
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

    useEffect(() => {
      if(theme in themes){
          setColor(themes[theme][type]);
          setBgcolor(themes[theme].progessbarBgColor);
          setMood(themes[theme].colors);
      }
      else{
        setColor(themes[theme][type]);
        setBgcolor(themes[theme].progessbarBgColor);
        setMood(themes[theme].colors);
      }
      setIcon(icons[type]);
    }, []);

  return (
    <div className={`popz fixed top-[20px] right-[20px] min-w-52 rounded-[10px] z-[9999] shadow-xl ${mood} ${progressBar==='true' ? 'pt-[7px] pb-[0.2px] px-1':'py-[9px] px-2'}`}>
        <div className='text-center px-[5px] flex items-center gap-x-1 text-base'><span className={`text-[${color}]`}>{icon}</span> {message}</div>
        {(progressBar === 'true') && <ProgressBar color={color} bgcolor={bgcolor}/>}
    </div>
  );
}

export default Popz;
