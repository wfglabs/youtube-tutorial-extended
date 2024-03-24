import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  Slide,
  Grid,
  IconButton,
  Box,
  Rating,
} from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import Constant from '../../Constant'

const listOfData = [
  {
    comment: 'This is a comment',
    commenterName: 'John Doe',
    date: '2021-12-12',
    rating: 5,
  },
  {
    comment: 'This is another comment',
    commenterName: 'Xyz Abc',
    date: '2020-12-12',
    rating: 4.2,
  },
  {
    comment: 'This is a fabulous course',
    commenterName: 'Bhaskar',
    date: '2029-12-12',
    rating: 3.7,
  },
  {
    comment: 'This is a fabulous course',
    commenterName: 'Nishant',
    date: '2029-12-12',
    rating: 4.5,
  },
  {
    comment: 'This is a fabulous course',
    commenterName: 'Farhan',
    date: '2029-12-12',
    rating: 4.5,
  },
]

const CommentSlider = () => {
  const [index, setIndex] = useState(0)

  const handleSlideChange = (step: any) => {
    setIndex(
      (prevIndex) => (prevIndex + step + listOfData.length) % listOfData.length,
    )
  }

  return (
    <Box
      sx={{
        display: 'flex',
        marginTop: '4%',
        flexDirection: 'column',
        padding: '3%',
        backgroundImage: Constant.backgroundImage.gradientCyan1,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={() => handleSlideChange(-1)}>
          <ArrowBack />
        </IconButton>

        {[0, 1, 2].map((offset) => {
          const dataIndex = (index + offset) % listOfData.length
          const data = listOfData[dataIndex]
          return (
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
              <Card sx={{ width: '25%' }}>
                <CardContent>
                  <Typography
                    sx={{ fontFamily: 'cursive', fontWeight: 'bold' }}
                    variant="h5"
                  >
                    {data.comment}
                  </Typography>
                  <Typography variant="subtitle1">
                    {data.commenterName}
                  </Typography>
                  <Typography variant="subtitle2">{data.date}</Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={data.rating}
                    precision={0.5}
                    readOnly
                  />
                </CardContent>
              </Card>
            </Slide>
          )
        })}
        <IconButton onClick={() => handleSlideChange(1)}>
          <ArrowForward />
        </IconButton>
      </Box>
    </Box>
  )
}

export default CommentSlider
