import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Faq from '../components/faq/Faq'

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/faq" element={<Faq />} />
    </Routes>
  )
}

export default IndexRoutes
