import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../firebase';


const Logout = () => {
    const GoogleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
        <button className='p-2 bg-slate-50 rounded-md hover:bg-slate-300' onClick={GoogleLogout}>Logout</button>
  )
}

export default Logout