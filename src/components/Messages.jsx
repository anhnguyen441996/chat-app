import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';



const Messages = () => {
  const [user] = useAuthState(auth);

  const scroll = useRef();
  useEffect(() => {
    scroll.current.scrollTo(0, 3000)
  })

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const mess = [];
      querySnapshot.forEach((doc) => {
        mess.push(doc.data());
        mess.sort(function (a, b) { return a.timestamp - b.timestamp })
      });
      setMessages(mess);
    });
  }, [])
  return (
    < div className='h-[560px] overflow-y-auto py-4 px-6' ref={scroll}>



      {messages.map((message,index) => (
        <div className={`flex flex-col mt-4 ${message.email != user.email ? "items-start bg-slte-100" : "items-end" }`} key={index}>
          <h1 className='text-slate-500'>{message.name}</h1>
          <p className={`text-white px-4 py-2 rounded-tl-lg shadow-lg ${message.email != user.email ? 'bg-slate-500' : 'bg-blue-300'}`}>{message.text}</p>
        </div>

      ))}
    </div>

  )
}

export default Messages