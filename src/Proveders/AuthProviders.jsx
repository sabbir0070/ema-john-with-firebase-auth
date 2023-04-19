import React, { createContext, useEffect, useState } from 'react';


import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app)

const AuthProviders = ({ children }) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
// Sign Up User
const createUser = (email,password) =>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password);
}

// Sign In User
const signInUser = (email,password) =>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

// Sign Out
const logOutUser = () =>{
return signOut(auth)
}
// observe user auth state
useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser =>{
setUser(currentUser);
setLoading(false)
})
return () =>{
return unsubscribe();
}
},[])

  const authInfo = {
    user,
loading,
createUser,
signInUser,
logOutUser,
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;