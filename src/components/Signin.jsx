import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsLoggedIn, error, setError, login, googleLogin ,user } = useAuth();

  setIsLoggedIn(true);
  
  const navigate = useNavigate();

  //Sign in with google
  const handleGoogleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages
    try {
      await googleLogin(); // Make sure login function is correctly implemented
      navigate("/home");
    } catch (error) {
      setError("Invalid Credentials");
    }
  };
  //sign in with email land password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error messages
    try {
      await login(email, password); // Make sure login function is correctly implemented
     history.push('/home')
    } catch (error) {
      setError("Invalid Credentials");
    }
  };

  return (
   <>
 <div className="bg-landing-page bg-cover bg-center bg-opacity-50 min-h-screen flex flex-col justify-center items-center">
    <nav className="absolute top-4 container flex justify-between items-center w-full">
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
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-800 p-3 mb-4 rounded-md w-5/6"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-gray-800 p-3 mb-4 rounded-md  w-5/6"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red-500 text-xs italic text-center mb-4">
          {error}
        </p>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Log In
        </button>
      </form>
      <p className="text-gray-600 text-center mt-4">or</p>
      <div className="flex justify-center items-center">
        <button className="text-white text-4xl mt-5" onClick={handleGoogleSubmit}>
          <FcGoogle />
        </button>
      </div>
    </div>
  </div> 
   </>
  );
};

export default Signin;
