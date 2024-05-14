import "./App.css";
import Home from "./components/Home";
import Landing from "./components/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Signin from "./components/Signin";

function App() {
  const { user } = useAuth();

  return (
    <>
      <Routes>
        <Route path="/" exact element={<Landing />} />
        {!user ? (
          <Route path="/login" element={<Signin />} />
        ) : (
          <Route path="/login" element={<Navigate to="/home" />} />
        )}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
