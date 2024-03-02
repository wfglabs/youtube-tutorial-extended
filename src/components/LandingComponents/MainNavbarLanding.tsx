import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined'
import CalculateIcon from '@mui/icons-material/Calculate'
import TerminalIcon from '@mui/icons-material/Terminal'
import BookIcon from '@mui/icons-material/Book'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'
import AssignmentIcon from '@mui/icons-material/Assignment'
import PsychologyIcon from '@mui/icons-material/Psychology'
import SchoolIcon from '@mui/icons-material/School'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const style = {
  backgroundImage: 'url(./backgroundLanding.jpg)',
}

const MainNavbarLanding = () => {
  const handleSignUpButton = () => {
    window.location.href = '/signup'
  }

  const handleLoginButton = () => {
    window.location.href = '/login'
  }

  return (
    <Box sx={style}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '15vw',
            marginRight: '15vw',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography
              sx={{
                color: '#36454F',
                fontSize: '30px',
                marginLeft: '20px',
                fontWeight: '1000',
                fontFamily: 'cursive',
              }}
            >
              Tutorial Extended
            </Typography>
            <YouTubeIcon
              style={{ color: 'blue', marginLeft: '10px', fontSize: 45 }}
            />
          </Box>
          <Button
            variant="contained"
            sx={{
              color: 'white',
              marginTop: '5px',
              marginRight: '25px',
              width: '150px',
              height: '50px',
              fontSize: '15px',
              fontWeight: 'bold',
              borderRadius: '10px',
              textTransform: 'none',
            }}
          >
            I am a creator
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '150px',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '50px',
              fontWeight: 'bold',
              fontFamily: 'Opne Sans, sans-serif',
            }}
          >
            Without Practice Tutorials Are Useless
          </Typography>
          <Typography
            sx={{
              color: '#39424E',
              fontSize: '18px',
              maxWidth: '750px',
              marginTop: '20px',
              fontWeight: '300',
            }}
          >
            We are redefining the way of learning. All the good Tutorials are
            already available on the internet. But we just upgrade them to next
            level, by providing perfect environment for practice.
          </Typography>
          <Box>
            <Button
              onClick={handleSignUpButton}
              variant="contained"
              sx={{
                color: 'white',
                marginTop: '20px',
                width: '150px',
                height: '50px',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '10px',
                textTransform: 'none',
              }}
            >
              Sign up
            </Button>
            <Button
              onClick={handleLoginButton}
              variant="outlined"
              sx={{
                color: 'black',
                marginTop: '20px',
                marginLeft: '30px',
                width: '150px',
                height: '50px',
                fontSize: '15px',
                fontWeight: 'bold',
                borderRadius: '10px',
                textTransform: 'none',
              }}
            >
              Log in
            </Button>
          </Box>
          <Typography
            sx={{
              color: '#39424E',
              fontSize: '18px',
              marginTop: '40px',
              fontWeight: '300',
            }}
          >
            Most of the learner have already changed their way of learning. What
            are you waiting for?
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '30px',
              marginBottom: '50px',
            }}
          >
            <AssignmentIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <OndemandVideoIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <BookIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <TerminalIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <CalculateIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <PsychologyIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <ScienceOutlinedIcon
              sx={{ fontSize: '40px', marginLeft: '20px' }}
            />
            <SchoolIcon sx={{ fontSize: '40px', marginLeft: '20px' }} />
            <WorkspacePremiumIcon
              sx={{ fontSize: '40px', marginLeft: '20px' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default MainNavbarLanding
