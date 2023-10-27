import { createContext, useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  console.log(isLoggedIn);
  
  const login = () => {
        setIsLoggedIn(true);
  };
  
  const logout = async () => {
    try { 
      await signOut(auth);  
      setIsLoggedIn(false);
      navigate('/signin');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);
