import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);

    //register user
   const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
   }
    ///login user
   const SignIn = (email, password)=>{
     return signInWithEmailAndPassword(auth, email, password)
   }
    //logout
     const logOut= ()=>{
        return signOut(auth)
     }

   //login or Logout
     useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
        console.log('logged in user inside auth obbser', loggedUser)
        setUser(loggedUser)
      })

      return ()=>{
         unsubscribe();
      }

     },[])

    //user edit
  
    const authInfo={
        user,
        logOut,
        createUser,
        SignIn,

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;