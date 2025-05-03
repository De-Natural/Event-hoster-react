import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Faq from '../components/faq/Faq'
import SignUp from '../components/auth-pages/SignUp'
import Login from '../components/auth-pages/login/Login'

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/faq" element={<Faq />} />
      <Route path="/auth-pages" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default IndexRoutes
