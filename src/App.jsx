import './App.css'
import Home from './components/Home'
import Landing from './components/Landing'
import Signin from './components/signin'
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
