import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { uid } from 'uid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const SendMessage = () => {
  const [user] = useAuthState(auth);
  console.log(user);
    const [input, setInput] = useState("");
    const date = new Date();
    const SendMessages =  async (e) => {
        e.preventDefault()
        await setDoc(doc(db, "messages", uid()), {
            name: user.displayName,
            email: user.email,
            text: input,
            timestamp: date
          });
          setInput('');
    }
  return (
        <form onSubmit={SendMessages} className='w-full absolute bottom-0 h-12'>
            <input type="text" value={input} placeholder='Message' onChange={(e) => setInput(e.target.value)} className='w-[80%] p-2 outline-none'/>
            <button type='submit' className='bg-green-600 w-[20%] py-2'>Send</button>
        </form> 
        
  )
}

export default SendMessage 