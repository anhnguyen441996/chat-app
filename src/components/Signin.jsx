import React from 'react';
import {  signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { auth } from '../firebase';

const Signin = () => {
    const provider = new GoogleAuthProvider();
    const GoogleSignin = () => {
        signInWithRedirect(auth, provider);
    }
    
    return (
        <GoogleButton onClick={GoogleSignin}/>
    )
}

export default Signin