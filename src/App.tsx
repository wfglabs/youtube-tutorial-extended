import { Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUp/SignUpForm'
import SignInForm from './components/SignIn/SignInForm'
import LandingPage from './pages/LandingPage'
import { Box } from '@mui/system'
import FooterEveryWhere from './components/FooterEveryWhere/FooterEveryWhere'

function App() {
  return (
    <>
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
