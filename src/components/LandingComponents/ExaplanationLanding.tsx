import React from 'react'
import { Box, Typography } from '@mui/material'


const ExplanationLanding = () => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography
        sx={{
          marginTop: '60px',
          fontSize: '60px',
          fontFamily: 'Opne Sans, sans-serif',
        }}
      >
        Its not Tutorial Problem
      </Typography>
      <Typography
        sx={{
          color: '#00BFFF',
          fontSize: '60px',
          fontFamily: 'Opne Sans, sans-serif',
        }}
      >
        Its Practice Problem
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
        Tutorials are boaring. but with us you can learn with fun and practice
        with us. we made learning easy and fun. we are here to help you to learn
        and practice. Now no more boring tutorials. interactive and fun learning
        with us.
      </Typography>
    </Box>
  )
}

export default ExplanationLanding
