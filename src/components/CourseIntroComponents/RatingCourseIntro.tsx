import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';


const RatingCourseIntro: React.FC = () => {
  return (
    <Box>
      {/* floating card */}
      <Box sx={{display:'flex', justifyContent: 'flex-end'}}>
           <Button variant='contained'>Save</Button>
           <Button sx={{marginRight:'2%',marginLeft:'1%'}}>Preview</Button> 
      </Box>
      <Card sx={{
        position: 'fixed',
        top: '35%',
        left: '72%',
        transform: 'translate(-50%, -50%)',
        width: '23%',
        height: '40%',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
        zIndex: 100,
      }}>
 
      </Card>
      <Card sx={{marginTop:"100px",backgroundColor: 'black',minHeight: '30vh'}}>
            helloWorld
      </Card>
    </Box>
  )
}

export default RatingCourseIntro