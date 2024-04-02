import React from 'react';
import { PopzProvider, usePopz } from './index';

const App = () => {
  return (
    <PopzProvider position='tr'>
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
    popz('dark','warning','Notice all the errors you see in the console. This tells you there tice all the errors you see in the console. This tells you there are type errors in your codebase Also notice that no index.js is created anymore', 'true');
  };
  const handleSubmit4 = () => {
    popz('dark','info','', 'true');
  };
  const handleSubmit5 = () => {
    popz('dark','default','', 'false');
  };

  return (
    <div className='App flex flex-col justify-around w-[90px] mx-3'>
      <h1>My Test App</h1>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit5}>default</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit1}>success</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit2}>error</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit3}>warning</button>
      <button className='p-2 bg-blue-700 text-white font-semibold rounded-lg my-5' onClick={handleSubmit4}>info</button>
    </div>
  );
};

export default App;
