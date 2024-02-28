import React from 'react';
import { PopzProvider, usePopz } from './react-popupz';

const App = () => {
  return (
    <PopzProvider>
      <AppContent />
    </PopzProvider>
  );
};

const AppContent = () => {
  const { popz } = usePopz();

  const handleSubmit = () => {
    popz('dark','default','', 'false');
  };

  return (
    <div className='App'>
      <h1>My Test App</h1>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default App;
