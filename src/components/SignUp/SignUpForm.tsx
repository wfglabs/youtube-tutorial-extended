import React, { useState } from 'react'
import './SignUpForm.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const SignUpForm: React.FC = () => {
  const [fullName, setFullName] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isEmailInputFocused, setIsEmailInputFocused] = useState(false)
  const [isFullNameInputFocused, setIsFullNameInputFocused] = useState(false)
  const [isPasswordInputFocused, setIsPasswordInputFocused] = useState(false)
  const [isConfirmPasswordInputFocused, setIsConfirmPasswordInputFocused] =
    useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const validateFullName = () => {
    if (!fullName.trim()) {
      setFullNameError('Full name is required')
    } else {
      setFullNameError('')
    }
  }

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value
    setFullName(newName)

    validateFullName()
  }

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValidEmail = emailRegex.test(email)
    if (!isValidEmail) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value
    setEmail(newEmail)

    validateEmail()
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    validatePassword()
  }

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value)
    validateConfirmPassword()
  }

  const handleEmailInputFocus = () => {
    setIsEmailInputFocused(true)
    validateEmail()
  }

  const handleEmailInputBlur = () => {
    setIsEmailInputFocused(false)
    validateEmail()
  }

  const handleFullNamelInputFocus = () => {
    setIsFullNameInputFocused(true)
    validateFullName()
  }

  const handleFullNamelInputBlur = () => {
    setIsFullNameInputFocused(false)
    validateFullName()
  }

  const handlePasswordInputFocus = () => {
    setIsPasswordInputFocused(true)
    validatePassword()
  }

  const handlePasswordInputBlur = () => {
    setIsPasswordInputFocused(false)
    validatePassword()
  }

  const handleConfirmPasswordInputFocus = () => {
    setIsConfirmPasswordInputFocused(true)
    validateConfirmPassword()
  }

  const handleConfirmPasswordInputBlur = () => {
    setIsConfirmPasswordInputFocused(false)
    validateConfirmPassword()
  }

  const validatePassword = () => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasLowerCase = /[a-z]/.test(password)
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
      password,
    )

    const isValidLength = password.length >= 8

    if (!isValidLength) {
      setPasswordError('Password must be at least 8 characters')
    } else if (!hasUpperCase) {
      setPasswordError('Password must contain at least one uppercase letter')
    } else if (!hasLowerCase) {
      setPasswordError('Password must contain at least one lowercase letter')
    } else if (!hasSpecialChar) {
      setPasswordError('Password must contain at least one special character')
    } else {
      setPasswordError('')
    }
  }

  const validateConfirmPassword = () => {
    if (!confirmPassword.trim()) {
      setConfirmPasswordError('Confirm Password cannot be empty')
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Confirm Password does not match')
    } else {
      setConfirmPasswordError('')
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowPassword) => !prevShowPassword)
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreeTerms) {
      alert('Please agree to the terms of service and privacy policy.')
    }

    validateEmail()
    validateFullName()
    validatePassword()
    validateConfirmPassword()
  }

  const handleGoogleSignUp = () => {
    console.log('Signing up with Google')
  }

  const handleAgreeTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(e.target.checked)
  }

  return (
    <div className="centered-container">
      <div>
        <div className="signup-form">
          <div className="signup-form-content">
            <div className="yte-header-content">Tutorial extended</div>
            <p className="create-your-account-text">Create your account</p>
            <div>
              <button
                className="google-signup-button"
                onClick={handleGoogleSignUp}
              >
                <img
                  className="google-icon"
                  src="https://hrcdn.net/fcore/assets/google-colored-20b8216731.svg"
                ></img>{' '}
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="or-text">
              <span>OR</span>
            </div>
            <form onSubmit={handleSignUp}>
              <div className="input-container">
                <label htmlFor="email" className="label-name">
                  Email:
                </label>
                <input
                  id="email"
                  onFocus={handleEmailInputFocus}
                  onBlur={handleEmailInputBlur}
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
                {!isEmailInputFocused && emailError && (
                  <div className="validation-error">{emailError}</div>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  onFocus={handleFullNamelInputFocus}
                  onBlur={handleFullNamelInputBlur}
                  value={fullName}
                  placeholder="Your name"
                  onChange={handleFullNameChange}
                />
                {!isFullNameInputFocused && fullNameError && (
                  <div className="validation-error">{fullNameError}</div>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="password">Password:</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Password"
                  onFocus={handlePasswordInputFocus}
                  onBlur={handlePasswordInputBlur}
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="toggle-show-password-button">
                  <button type="button" onClick={togglePasswordVisibility}>
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                {!isPasswordInputFocused && passwordError && (
                  <div className="validation-error">{passwordError}</div>
                )}
              </div>
              <div className="input-container">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirm-password"
                  onFocus={handleConfirmPasswordInputFocus}
                  onBlur={handleConfirmPasswordInputBlur}
                  placeholder="Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <div className="toggle-show-password-button">
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <FontAwesomeIcon
                      icon={showConfirmPassword ? faEyeSlash : faEye}
                    />
                  </button>
                </div>
                {!isConfirmPasswordInputFocused && confirmPasswordError && (
                  <div className="validation-error">{confirmPasswordError}</div>
                )}
              </div>
              <div className="agree-terms">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={handleAgreeTermsChange}
                />
                <label htmlFor="agreeTerms" className="terms-label">
                  I agree to the <a href="#">Terms of Service</a> and{' '}
                  <a href="#">Privacy Policy</a>
                </label>
              </div>
              <button className="form-submit-button" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="switch-to-login">
          <p>
            Already have account?{' '}
            <a href="#" className="swtich-to-login-link">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
