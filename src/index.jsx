import React, { useState, createContext, useContext } from 'react';
import Popz from './Popz';

const PopzContext = createContext();

export const PopzProvider = ({children}) => {
  const [popzTheme, setPopzTheme] = useState(null);
  const [popzType, setPopzType] = useState(null);
  const [popzMessage, setPopzMessage] = useState(null);
  const [popzProgressBar, setPopzProgressBar] = useState(null);

  const popz = {
    popz: (theme, type, message, progressBar) => {
      setPopzTheme(theme.toLowerCase());
      setPopzType(type.toLowerCase());
      setPopzMessage(message.toLowerCase());
      setPopzProgressBar(progressBar.toLowerCase());

      setTimeout(() => {
        setPopzTheme(null),
        setPopzType(null);
        setPopzMessage(null);
        setPopzProgressBar(null);
      }, 3000);
    }
  };
    
  return (
    <PopzContext.Provider value={popz}>
      {children}
      {popzType && <Popz theme={popzTheme} type={popzType} message={popzMessage} progressBar={popzProgressBar}/>}
    </PopzContext.Provider>
  );
};

export const usePopz = () => {
  const context = useContext(PopzContext);

  if(!context){
      throw new Error('usePopz must be used within a PopzProvider');
  }
  return context;
};
