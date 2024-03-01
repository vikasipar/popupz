import React, { createContext, useContext, useEffect, useState } from 'react';
import Popz from './Popz';
import './index.css';

const PopzContext = createContext();

export const PopzProvider = ({ children, position }) => {
  const [popzQueue, setPopzQueue] = useState([]);
  const [id, setId] = useState(0);
  const [dir, setDir] = useState('tr');

  useEffect(() => {
    const directions = ['tl', 'tr', 'bl', 'br'];
    setDir(directions.includes(position)?position:'tr');
  }, [position])

  const popz = {
    popz: (theme, type, message, progressBar) => {
      const newId = id + 1;
      setId(newId);
      const newPop = { id: newId, theme: theme.toLowerCase(), type: type.toLowerCase(), message: message, progressBar: progressBar.toLowerCase() };
      setPopzQueue(prevQueue => [...prevQueue, newPop]);
      setTimeout(() => {
        setPopzQueue(prevQueue => prevQueue.filter(pop => pop.id !== newPop.id));
      }, 3000);
    }
  };

  return (
    <PopzContext.Provider value={popz}>
      {children}
      {popzQueue.length > 0 && (
        <div className={`container ${dir}`}>
          {popzQueue.map((pop) => (
            <div key={pop.id} className='popzSpace'>
              <Popz theme={pop.theme} type={pop.type} message={pop.message} progressBar={pop.progressBar} direction={dir}/>
            </div>
          ))}
        </div>
      )}
    </PopzContext.Provider>
  );
};


export const usePopz = () => {
  const context = useContext(PopzContext);

  if (!context) {
    throw new Error('usePopz must be used within a PopzProvider');
  }
  return context;
};
