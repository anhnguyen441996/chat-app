import React from 'react'
import Logout from './Logout'
import Signin from './Signin'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
  return (
    <div className='flex justify-between bg-gray-600 h-20 items-center p-4'>
        <h3 className='text-3xl text-white'>Chat App</h3>
        {user ? <Logout/> : <Signin/>}
    </div>
  )
}

export default Navbar