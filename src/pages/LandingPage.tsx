import React from 'react'
import logo from './logo.svg'
import { Box } from '@mui/material'
import SecondaryNavbar from '../components/SecondaryNavbarLanding'
import TertiaryNavbar from '../components/TertiaryNavbarLanding'
import MainNavbarLanding from '../components/MainNavbarLanding'
import ExplanationLanding from '../components/ExaplanationLanding'
import ExtraContentLanding from '../components/ExtraContentLanding'

function App() {
  return (
    <Box>
      <TertiaryNavbar />
      <SecondaryNavbar />
      <MainNavbarLanding />
      <ExplanationLanding />
      <ExtraContentLanding />
    </Box>
  )
}

export default App
