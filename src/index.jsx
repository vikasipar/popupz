import React, { createContext, useContext, useState } from 'react';
import Popz from './Popz';

const PopzContext = createContext();

export const PopzProvider = ({ children }) => {
  const [popzQueue, setPopzQueue] = useState([]);
  const [id, setId] = useState(0);

  const popz = {
    popz: (theme, type, message, progressBar) => {

      const newId = id + 1;
      setId(newId);
      const newPop = { id: newId, theme: theme.toLowerCase(), type: type.toLowerCase(), message: message.toLowerCase(), progressBar: progressBar.toLowerCase() };
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
        <div className='fixed top-[20px] right-[20px] min-w-52'>
          {popzQueue.map((pop) => (
            <div key={pop.id} className='my-1'>
              <Popz theme={pop.theme} type={pop.type} message={pop.message} progressBar={pop.progressBar} />
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
