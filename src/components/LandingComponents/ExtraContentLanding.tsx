import React, { useState, useEffect } from 'react'
import { Box, Link, Typography, Card, Slide } from '@mui/material'

const cardTextStyle = {
  fontWeight: 'bold',
  fontSize: '20px',
  textAlign: 'center',
}

const ExtraContentLanding = () => {
  const [isOnMainScreen, setIsOnMainScreen] = useState(false)
  const [isOnMainScreen1, setIsOnMainScreen1] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 300) {
        console.log(window.scrollY)
        setIsOnMainScreen(true)
      }
      if (window.scrollY > 600) {
        console.log(window.scrollY)
        setIsOnMainScreen1(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box>
      <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginTop: '100px',
          marginLeft: '20vh',
          marginRight: '20vh',
        }}
      >
        <Slide direction="right" in={isOnMainScreen} mountOnEnter unmountOnExit>
          <Card>
            <img
              style={{ height: '200px', width: '200px' }}
              src="watchVideo.png"
            />
            <Typography sx={cardTextStyle}>Watch Tutorial</Typography>
          </Card>
        </Slide>
        <Slide direction="up" in={isOnMainScreen} mountOnEnter unmountOnExit>
          <Card>
            <img style={{ height: '200px', width: '200px' }} src="quiz.jpg" />
            <Typography sx={cardTextStyle}>Solve Quiz</Typography>
          </Card>
        </Slide>
        <Slide direction="down" in={isOnMainScreen} mountOnEnter unmountOnExit>
          <Card>
            <img
              style={{ height: '200px', width: '200px' }}
              src="activity.png"
            />
            <Typography sx={cardTextStyle}>Do Some Activity</Typography>
          </Card>
        </Slide>
        <Slide direction="left" in={isOnMainScreen} mountOnEnter unmountOnExit>
          <Card>
            <img
              style={{ height: '200px', width: '200px' }}
              src="certificate.png"
            />
            <Typography sx={cardTextStyle}>Get Certified</Typography>
          </Card>
        </Slide>
      </Box>
      </Box>
      <Box sx={{backgroundImage: 'url(./backgroundLanding.jpg)', marginTop : '150px'}}>
      <Slide direction="left" in={isOnMainScreen1} mountOnEnter unmountOnExit>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src="soloLeveling.avif"
            style={{
              borderRadius: '20%',
              maxHeight: '500px',
              maxWidth: '1000px',
              margin: '20px 0 20px 0',
             
            }}
          />
        </Box>
      </Slide>
      </Box>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography
          variant="h4"
          sx={{
            marginTop: '30px',
            color: '#00BFFF',
            fontSize: '40px',
            fontFamily: 'Opne Sans, sans-serif',
          }}
        >
          Compete With The World
        </Typography>
        <Typography
          sx={{
            fontSize: '40px',
            fontFamily: 'Opne Sans, sans-serif',
            marginBottom: '100px',
            fontWeight: 'bold',
          }}
        >
          Make Learninig Fun With Us
        </Typography>
      </Box>
    </Box>
  )
}

export default ExtraContentLanding
