import React from 'react'
import { Box, Link, Typography } from '@mui/material'

const style = {
  height: '20px',
  background: 'rgb(9, 55, 131)',
  backgroundImage:
    'radial-gradient(circle, rgba(9, 55, 131, 1) 0%, rgba(1, 34, 34, 1) 92%, rgba(0, 187, 229, 1) 100%)',
}

const SecondaryNavbar = () => {
  return (
    <Box sx={style}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginLeft: '15vw',
          marginRight: '15vw',
        }}
      >
        <Link sx={{ color: 'white' }} href="#" underline="hover">
          {'Contact Us'}
        </Link>
        <Typography
          sx={{ color: 'white', marginRight: '20px', marginLeft: '20px' }}
        >
          |
        </Typography>
        <Link sx={{ color: 'white' }} href="#" underline="hover">
          {'About Us'}
        </Link>
        <Typography
          sx={{ color: 'white', marginRight: '20px', marginLeft: '20px' }}
        >
          |
        </Typography>
        <Link
          sx={{ color: 'white', marginRight: '30px' }}
          href="#"
          underline="hover"
        >
          {'Donate'}
        </Link>
      </Box>
    </Box>
  )
}

export default SecondaryNavbar
