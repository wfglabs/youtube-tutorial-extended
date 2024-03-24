import React from 'react'
import YoutubePlayer from './tools/videoPlayer/videoPlayer'
import Box from '@mui/material/Box'

const Test = () => {
  const startTime = 0
  const endTime = 680
  const videoId = 'fqMOX6JJhGo'
  console.log(videoId)
  return (
    <Box>
      <YoutubePlayer
        startTime={startTime}
        endTime={endTime}
        videoId={videoId}
      />
    </Box>
  )
}

export default Test
