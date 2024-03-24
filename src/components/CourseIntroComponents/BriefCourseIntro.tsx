import React from 'react'
import { Box, Typography, Button, Card, Rating } from '@mui/material'
import Constant from '../../Constant'
import CourseIntroForm from './CourseIntroForm'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined'

const courseIntroData = {
  mentorName: 'Belal Azam',
  courseTitle: 'The Complete Course on React for Beginners',
  courseDescription:
    'This is a course on React, You will become a Professional Web Developer, After this Course Picasso will take tution from you, you will know true meanning of art what is art called, but even though this much word is enough',
  courseLanguage: 'English',
  courseThumbnail:
    'https://nareshit.com/wp-content/uploads/2019/01/ReactJS-online-training-nareshit.jpg',
  courseVideoUrl: 'https://www.google.com',
  courseDetailedDescription:
    'This is a course on React, this course will help you to learn React from scratch. also please provide your feedback and rating for this course. Hope Your are going to enjoy this course. Thank You. For watching this course. make 40 more works , so For making 40 more words we are going to write expalnation of react and its history and its future. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex applications require more tools for managing the state of the UI. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded. However, fetching data is only the beginning of what happens on a web page, which is why complex applications require more tools for managing the state of the UI.',
  courseConent: [
    {
      content: 'Introduction to React',
    },
    {
      content: 'React Hooks',
    },
    {
      content: 'React Context',
    },
    {
      content: 'React Router',
    },
    {
      content: 'Redux',
    },
    {
      content: 'React Testing',
    },
    {
      content: 'React Deployment',
    },
    {
      content: 'React Project',
    },
    {
      content: 'React Project With Backend',
    },
  ],
}

const courseCommentAndRating = {
  commentsInfo: [
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 4.5,
    },
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 4.2,
    },
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 2.9,
    },
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 3.7,
    },
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 4.7,
    },
    {
      comment: 'This course is very helpful',
      commentBy: 'Rahul',
      commentDate: '2021-11-01',
      rating: 3.7,
    },
  ],
  totalRating: 3.7,
}

const BriefCourseIntro: React.FC = () => {
  return (
    <Box>
      {/* floating card */}
      <Card
        sx={{
          position: 'absolute',
          top: '35%',
          left: '75%',
          transform: 'translate(-50%, -50%)',
          width: '28%',
          height: '45%',
          borderRadius: '20px',
          padding: '7px',
          boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2)',
          zIndex: 100,
        }}
      >
        <img
          src={courseIntroData.courseThumbnail}
          alt="course thumbnail"
          style={{ width: '100%', height: '100%', borderRadius: '20px' }}
        />
        <Button
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <PlayCircleFilledWhiteOutlinedIcon
            sx={{
              fontSize: '800%',
              border: '2%',
              borderColor: 'black',
              color: 'black',
            }}
          />
        </Button>
      </Card>
      <Card
        sx={{
          marginTop: '4.5%',
          padding: '3%',
          paddingLeft: '14%',
          backgroundColor: Constant.fontColor.blackShadeLight1,
          minHeight: '30vh',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '55%' }}>
          <Typography
            sx={{
              color: Constant.fontColor.cyanShadeLight1,
              fontSize: '200%',
              fontWeight: 'bold',
              marginBottom: '3%',
            }}
          >
            {courseIntroData.courseTitle}
          </Typography>
          <Typography
            sx={{ color: 'white', fontSize: '100%', fontWeight: 'bold' }}
          >
            {courseIntroData.courseDescription}
          </Typography>
          <Box sx={{ display: 'flex', marginTop: '3%' }}>
            <Rating
              name="half-rating-read"
              defaultValue={courseCommentAndRating.totalRating}
              precision={0.5}
              readOnly
            />
            <Typography
              sx={{
                color: 'white',
                fontSize: '100%',
                fontWeight: 'bold',
                marginLeft: '4%',
              }}
            >
              {courseIntroData.courseLanguage}
            </Typography>
          </Box>
          <Typography
            sx={{ color: 'white', fontSize: '100%', marginTop: '3%' }}
          >
            created by:
          </Typography>
          <Typography
            sx={{
              color: Constant.colour.buttonLightPink,
              fontSize: '100%',
              fontWeight: 'bold',
              marginLeft: '4%',
            }}
          >
            {courseIntroData.mentorName}
          </Typography>
        </Box>
      </Card>
      <Typography
        sx={{
          marginTop: '5%',
          color: Constant.fontColor.blackShadeLight1,
          fontSize: '200%',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        Course Content
      </Typography>
      <Card
        sx={{ backgroundImage: 'url(./backgroundLanding.jpg)', padding: '1%' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginTop: '5%',
            width: '30%',
            margin: 'auto',
          }}
        >
          {courseIntroData.courseConent.map((item: any, index: any) => {
            return (
              <Box
                sx={{
                  borderRadius: '5%',
                  margin: '1%',
                  backgroundColor:
                    index % 2 == 0
                      ? Constant.fontColor.blackShadeLight1
                      : 'white',
                }}
              >
                <Typography
                  key={index}
                  sx={{
                    color: index % 2 == 0 ? 'white' : 'black',
                    textAlign: 'center',
                  }}
                >
                  {item.content}
                </Typography>
              </Box>
            )
          })}
        </Box>
      </Card>
      <Typography
        sx={{
          marginTop: '5%',
          color: Constant.fontColor.blackShadeLight1,
          fontSize: '200%',
          fontWeight: 'bold',
          marginLeft: '13%',
        }}
      >
        Detailed Description
      </Typography>
      <Card
        sx={{
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '12%',
        }}
      >
        <Typography
          sx={{
            color: Constant.fontColor.blackShadeLight1,
            fontSize: '100%',
            fontWeight: 'bold',
            padding: '3%',
          }}
        >
          {courseIntroData.courseDetailedDescription}
        </Typography>
      </Card>
    </Box>
  )
}

export default BriefCourseIntro
