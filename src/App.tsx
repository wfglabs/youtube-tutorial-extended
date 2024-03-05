import { Route, Routes, useLocation } from 'react-router-dom'
import SignUpForm from './components/SignUp/SignUpForm'
import SignInForm from './components/SignIn/SignInForm'
import LandingPage from './pages/LandingPage'
import { Box } from '@mui/system'
import FooterEveryWhere from './components/FooterEveryWhere/FooterEveryWhere'
import TopNavBar from './components/TopNavBar/TopNavBar'
import TertiaryNavbar from './components/LandingComponents/TertiaryNavbarLanding'
import { useEffect, useState } from 'react'

function App() {
  const location = useLocation()
  const [isHomePage, setIsHomePage] = useState(false)

  useEffect(() => {
    setIsHomePage(location.pathname === '/')
  }, [location.pathname])

  return (
    <>
      {isHomePage && (
        <Box>
          <TertiaryNavbar />
          <TopNavBar />
        </Box>
      )}
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={LandingPage} />
        <Route path="/login" Component={SignInForm} />
        <Route path="/signup" Component={SignUpForm} />
      </Routes>
      <Box sx={{ marginTop: '200px' }}>
        <FooterEveryWhere />
      </Box>
    </>
  )
}

export default App
