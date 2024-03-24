import { Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUp/SignUpForm'
import SignInForm from './components/SignIn/SignInForm'
import LandingPage from './pages/LandingPage'
import CourseIntroPage from './pages/CourseIntroPage'
import { Box } from '@mui/system'
import Test from './Test'

import FooterEveryWhere from './components/FooterEveryWhere/FooterEveryWhere'
import { start } from 'repl'

function App() {
  const startTime = 320
  const endTime = 1000
  const youtubeId = 'LVcHh53YQVo'
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={LandingPage} />
        <Route path="/login" Component={SignInForm} />
        <Route path="/signup" Component={SignUpForm} />
        <Route path="/course_intro" Component={CourseIntroPage} />
        <Route path="/test" Component={Test} />
      </Routes>
      <Box sx={{ marginTop: '200px' }}>
        <FooterEveryWhere />
      </Box>
    </>
  )
}

export default App
