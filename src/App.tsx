import React from 'react'
import LandingPage from './pages/LandingPage'
import FooterEveryWhere from './components/FooterEveryWhere/FooterEveryWhere'
import './App.css'
import { Box } from '@mui/material'

function App() {
  return (
    <Box>
      <LandingPage />
      <FooterEveryWhere />
    </Box>
  )
}

export default App
