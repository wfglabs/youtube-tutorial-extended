import React from 'react'
import logo from './logo.svg'
import { Box } from '@mui/material'
import SecondaryNavbar from '../components/LandingComponents/SecondaryNavbarLanding'
import TertiaryNavbar from '../components/LandingComponents/TertiaryNavbarLanding'
import MainNavbarLanding from '../components/LandingComponents/MainNavbarLanding'
import ExplanationLanding from '../components/LandingComponents/ExaplanationLanding'
import ExtraContentLanding from '../components/LandingComponents/ExtraContentLanding'

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
