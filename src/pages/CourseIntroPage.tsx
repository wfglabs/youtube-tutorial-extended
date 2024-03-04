import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import CourseIntroForm from '../components/CourseIntroComponents/CourseIntroForm'
import BriefCourseIntro from '../components/CourseIntroComponents/BriefCourseIntro'
import Player from '../tools/videoPlayer';

const CourseIntroPage: React.FC = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained">Save</Button>
        <Button sx={{ marginRight: '2%', marginLeft: '1%' }}>Preview</Button>
      </Box>
      <CourseIntroForm />
      <Player />
    </Box>
  )
}

export default CourseIntroPage
