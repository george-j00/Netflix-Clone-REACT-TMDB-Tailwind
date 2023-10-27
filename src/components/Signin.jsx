import React from "react";
import "tailwindcss/tailwind.css";
import { FcGoogle } from "react-icons/fc";
import { auth, googleProvider } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn  } = useAuth();

  console.log(auth?.currentUser?.email);

  const navigate = useNavigate();

  const signIn = async () => {
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
      setIsLoggedIn(true);
    } catch (err) {
      console.error(err);
      setError("Invalid Credentials");
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home");
      setIsLoggedIn(true);
    
    } catch (err) {
      console.error(err);
      setError("Invalid Credentials");
    }
  };


  return (
    <>
      <div className="bg-landing-page bg-cover bg-center bg-opacity-50 min-h-screen flex justify-center items-center">
        <nav className="container absolute top-4 flex justify-between items-center w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="111"
            height="30"
            viewBox="0 0 111 30"
            fill="none"
          >
            <path
              d="M105.062 14.2806L110.999 30C109.249 29.7497 107.5 29.4367 105.718 29.1555L102.374 20.4686L98.9371 28.4375C97.25 28.1563 95.5928 28.0617 93.9057 27.8433L99.9372 14.0932L94.4681 0H99.5313L102.593 7.87422L105.875 0H110.999L105.062 14.2806ZM90.4687 0H85.875V27.25C87.3746 27.3437 88.9371 27.4056 90.4687 27.593V0ZM81.9055 26.9369C77.7186 26.6557 73.5308 26.4064 69.2502 26.3117V0H73.9366V21.8746C76.6248 21.9374 79.312 22.1558 81.9055 22.2804V26.9369ZM64.2497 10.6561V15.3435H57.8442V25.9996H53.2187V0H66.3436V4.68741H57.8442V10.6561H64.2497ZM45.3435 4.68741V26.2499C43.781 26.2499 42.1876 26.2499 40.6561 26.3117V4.68741H35.8122V0H50.2184V4.68741H45.3435ZM30.7498 15.5928C28.6878 15.5928 26.2499 15.5928 24.5 15.6875V22.6563C27.25 22.4679 30 22.2495 32.781 22.1558V26.6557L19.8125 27.6877V0H32.781V4.68741H24.5V10.9992C26.3127 10.9992 29.0936 10.9054 30.7498 10.9054V15.5928ZM4.78114 12.9684V29.343C3.09401 29.5314 1.5934 29.7497 0 30V0H4.46902L10.5624 17.0316V0H15.2498V28.0617C13.5936 28.3438 11.9065 28.4375 10.1247 28.6868L4.78114 12.9684Z"
              fill="#EE1520"
            />
          </svg>
        </nav>

        <div className="container bg-black bg-opacity-75 p-12 rounded-md w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
          <h2 className="text-3xl text-white mb-4 font-bold text-center">
            Sign In
          </h2>
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              id="email"
              className="bg-gray-800 p-3 mb-4 rounded-md"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-800 p-3 mb-4 rounded-md"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-red-500 text-xs italic text-center">{error}</p>
            <button
              onClick={signIn}
              className="bg-red-600 text-white px-4 py-2 mt-5 rounded-md"
            >
              Sign In
            </button>
            <p className="text-gray-600 flex justify-center mt-3">or</p>

            <button
              className="text-white flex justify-center mt-5 text-4xl"
              onClick={signInWithGoogle}
            >
              {" "}
              <FcGoogle />{" "}
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
