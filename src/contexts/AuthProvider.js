import React, { createContext, useState } from "react";
import app from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const authInfo = { user, loading };
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
