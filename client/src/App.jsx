import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import DetaineeSignUp from './Pages/DetaineeSignup/DetaineeSignup'
import Login from './Pages/Login/Login'
import JudgeHome from './Pages/JudgeHome/JudgeHome'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detain/signup" element={<DetaineeSignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/judge" element={<JudgeHome />} />
      </Routes>
    </>
  )
}

export default App
