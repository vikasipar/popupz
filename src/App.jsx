import React from 'react';
import { PopzProvider, usePopz } from './index';

const App = () => {
  return (
    <PopzProvider>
      <AppContent />
    </PopzProvider>
  );
};

const AppContent = () => {
  const { popz } = usePopz();

  const handleSubmit1 = () => {
    popz('light','success','', 'true');
  };
  const handleSubmit2 = () => {
    popz('light','error','', 'true');
  };
  const handleSubmit3 = () => {
    popz('dark','warning','', 'true');
  };
  const handleSubmit4 = () => {
    popz('dark','info','', 'true');
  };

  return (
    <div className='App flex flex-col justify-around w-[9%] mx-3'>
      <h1>My Test App</h1>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit1}>success</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit2}>error</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit3}>warning</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit4}>info</button>
    </div>
  );
};

export default App;
