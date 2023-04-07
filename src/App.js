import React, { useEffect } from 'react';
import Chat from './components/Chat';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="max-w-[728px] mx-auto text-center relative">
        <div className='flex flex-col bg-gray-100 h-[90vh] mt-10 shadow-xl border rounded-md'>
            <Navbar/>
            <Chat/>
        </div>
    </div>
  );
}

export default App;
