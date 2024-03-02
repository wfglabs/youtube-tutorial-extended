import { Route, Routes } from 'react-router-dom'
import SignUpForm from './components/SignUp/SignUpForm'
import SignInForm from './components/SignIn/SignInForm'

function App() {
  return (
    <Routes>
      <Route path="/login" Component={SignInForm} />
      <Route path="/signup" Component={SignUpForm} />
    </Routes>
  )
}

export default App
