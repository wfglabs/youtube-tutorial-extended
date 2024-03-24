import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import CourseIntroForm from '../components/CourseIntroComponents/CourseIntroForm'
import BriefCourseIntro from '../components/CourseIntroComponents/BriefCourseIntro'
import YoutubePlayer from '../tools/videoPlayer/videoPlayer'
import CommentSlider from '../components/CourseIntroComponents/CommentSlider'

const CourseIntroPage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2%' }}
      >
        <Button sx={{ marginRight: '1%' }} variant="contained">
          Manage Your Course
        </Button>
        <Button variant="contained">Save</Button>
        <Button sx={{ marginRight: '2%', marginLeft: '1%' }}>Preview</Button>
      </Box>
      <BriefCourseIntro />
      <CommentSlider />
    </Box>
  )
}

export default CourseIntroPage
