import React, { useState } from 'react'
import './SignInForm.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setError('Invalid login or password. Please try again.')
  }

  const handleGoogleSignIn = () => {
    console.log('Signing up with Google')
  }

  return (
    <div className="centered-container">
      <div>
        <div className="signin-form">
          <div className="signin-form-content">
            <div className="yte-header-content">Tutorial extended</div>
            <div>
              <button
                className="google-signin-button"
                onClick={handleGoogleSignIn}
              >
                <img
                  className="google-icon"
                  src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg"
                ></img>{' '}
                <span>Log in with Google</span>
              </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSignIn}>
              <div className="input-container">
                <label htmlFor="email" className="label-name">
                  Email:
                </label>
                <input
                  id="email"
                  placeholder="your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="toggle-show-password-login-button">
                  <button type="button" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <button className="form-submit-button" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
        <div className="switch-to-signup">
          <p>
            Don't have account?{' '}
            <Link to="/signup" className="swtich-to-signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
