import { createContext, useContext, useState ,useEffect } from "react";
import {
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth ,googleProvider } from "../config/firebase";


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({})

  const navigate = useNavigate();
  console.log(isLoggedIn);

  const login = async (email, password) => {
    try {
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const googleLogin = async () => {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
      throw err;
    }
  };
  
  const logout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser)
    })
    return () => {
        unsubscribe();
    }
})
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        error,
        setError,
        googleLogin,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
