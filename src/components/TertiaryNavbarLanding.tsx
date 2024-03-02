import React from 'react'
import { useState } from 'react'
import Slide from '@mui/material/Slide'
import { Box, Typography } from '@mui/material'
import CampaignIcon from '@mui/icons-material/Campaign'

const style = {
  height: '22px',
  backgroundColor: '#068932',
}

const temp = [
  'Wooho, you can get Now Golden Certifacte for 50% off',
  'Congratulation, Farhan Alam For Earnning Golden Certificate in DSA',
  'We are Now On Telgeram, Facebook, Twitter, Instagram, Youtube, ',
  'Get Chance to earn Free Golden Certificate by Sharing our Post',
  'We are Now on Forbs top List, thanks to our Users',
]

const TertiaryNavbar = () => {
  const [index, setIndex] = useState(0)
  const [checked, setChecked] = useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % temp.length)
      setChecked(false)
      setTimeout(() => setChecked(true), 50)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Box sx={style}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
          <CampaignIcon
            sx={{ color: 'white', fontSize: '20px', marginRight: '10px' }}
          />
        </Box>
        <Box>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Typography
              sx={{ color: 'white', fontWeight: '10px', fontStyle: 'italic' }}
            >
              {temp[index]}
            </Typography>
          </Slide>
        </Box>
      </Box>
    </Box>
  )
}

export default TertiaryNavbar
