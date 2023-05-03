import React, { createContext, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState([]);

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleGithubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
    //   .then((result) => {
    //     const loggedUser = result.user;
    //     console.log(loggedUser);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const authInfo = {
    user,
    handleGithubSignIn,
    handleGoogleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
