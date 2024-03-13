import { Box, Button } from '@mui/material'
import Course from '../../models/Course'
import { Grid } from '@mui/material'
import CourseCard from '../Course/CourseCard'
const { learningTopics, courses } = require('../../utils/LearningsTopic.tsx')

const LoggedInComponents = () => {
  const handleTopicClick = (topic: String) => {
    console.log(topic)
  }
  return (
    <>
      <Box sx={{ backgroundColor: '#fcfbfb' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            color: 'black',
            padding: '1rem',
          }}
        >
          {learningTopics.map((topic: string) => (
            <Button
              onClick={() => handleTopicClick(topic)}
              sx={{
                fontSize: '1rem',
                color: 'black',
                backgroundColor: '#E7E9EA',
                fontWeight: '500',
                '&:focus': {
                  outline: 'none',
                },
                '&:hover': { backgroundColor: '#E7E9EA' },
              }}
            >
              {topic}
            </Button>
          ))}
        </Box>
        <Grid
          container
          justifyContent="center"
          spacing={7}
          sx={{ margin: '0 auto', maxWidth: '90%' }}
        >
          {courses.map((course: Course, index: number) => (
            <Grid item xs={12} sm={6} md={3} lg={2.4} key={index}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default LoggedInComponents
