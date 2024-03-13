import { Link } from 'react-router-dom'
import Course from '../../models/Course'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material'

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const handleCourseCardClick = (course: Course) => {
    console.log(course)
  }
  return (
    <>
      <Card
        onClick={() => handleCourseCardClick(course)}
        sx={{
          padding: '25px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          height: '410px',
          width: '360px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
      >
        <CardHeader title={course.title}  />
        <CardMedia
          component="img"
          height="200"
          image={course.imageUrl}
          alt="Course Image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {course.description}
          </Typography>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              padding: '3%',
              fontWeight: '600',
            }}
          >
            {course.rating}{' '}
            <Rating
              value={course.rating}
              precision={0.5}
              sx={{
                marginLeft: '3%',
                marginRight: '3%',
              }}
              readOnly
            />
            <Typography variant="body1" color="text.secondary">
              ({course.ratingsCount})
            </Typography>
          </Typography>
          <Typography variant="body1">{course.createdBy}</Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CourseCard
