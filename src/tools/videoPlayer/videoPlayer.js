import React, { useRef, useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import VideoControlBar from './controlbar'
import { Box, Dialog, DialogContent } from '@mui/material'
import screenfull from 'screenfull'
import './videoPlayer.css'

const secToHHMMSS = (sec) => {
  const hours = Math.floor(sec / 3600)
  const minutes = Math.floor((sec - hours * 3600) / 60)
  const seconds = Math.floor(sec - hours * 3600 - minutes * 60)
  return `${hours}:${minutes}:${seconds}`
}

const fullScreenStyle = {
  padding: '0px',
  backgroundColor: 'black',
  paddingLeft: '1%',
}
const notFullScreenStyle = { padding: '0px', backgroundColor: 'black' }

const YoutubePlayer = ({ videoId, startTime, endTime, initialImage }) => {
  const playerRef = useRef(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [isPlay, setIsPlay] = useState(false)
  const [customHeight, setCustomHeight] = useState(300)
  const [customWidth, setCustomWidth] = useState(700)
  const totalTime = endTime - startTime
  const [count, setCount] = useState(0)
  const [currentVolume, setCurrentVolume] = useState(100)
  const [currentSpeed, setCurrentSpeed] = useState(1)
  const [isFullScreen, setIsFullScreen] = useState(false)
  const videoRef = useRef(null)
  const canvasRef = useRef(null)
  const [openDialog, setOpenDialog] = useState(false)
  const [isMouseStopped, setIsMouseStopped] = useState(false)

  const onPlayPause = () => {
    if (isPlay) {
      playerRef.current.pauseVideo()
      getImage()
    } else {
      playerRef.current.playVideo()
    }
    setIsPlay(!isPlay)
  }

  const onPlayerReady = (event) => {
    playerRef.current = event.target
    event.target.seekTo(0)
  }

  const onVolumeChange = (volume) => {
    setCurrentVolume(volume)
    playerRef.current.setVolume(volume)
  }

  const onSpeedChange = (speed) => {
    setCurrentSpeed(speed)
    playerRef.current.setPlaybackRate(speed)
  }

  useEffect(() => {
    if (isFullScreen && isMouseStopped) {
      setCustomHeight(window.innerHeight - 5)
    } else if (isFullScreen && !isMouseStopped) {
      setCustomHeight(window.innerHeight - 100)
      setCustomWidth(window.innerWidth - 40)
    }
  }, [isMouseStopped])

  useEffect(() => {
    if (isFullScreen) {
      screenfull.request()
    } else {
      screenfull.exit()
    }
    setCustomWidth(isFullScreen ? window.innerWidth - 25 : 700)
    setCustomHeight(isFullScreen ? window.innerHeight - 30 : 300)
  }, [isFullScreen])

  const onTimelineChange = (time) => {
    const player = playerRef.current
    if (player) {
      player.seekTo(time, true)
    }
  }

  const onPlayerStateChange = (event) => {
    setCurrentTime(event.target.getCurrentTime())

    // Check if an ad is playing
    if (event.data === YouTube.PlayerState.AD_PLAYING) {
      event.target.playVideo() // Bring the ad to the front again
    }
  }

  const setFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const getImage = async () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current.getInternalPlayer()
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      const dataUrl = canvas.toDataURL('image/jpeg')
      console.log(dataUrl)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(playerRef.current.getCurrentTime())
    }, 1000)

    // Clean up the interval
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let timeoutId
    const handleMouseMove = () => {
      setIsMouseStopped(false)
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMouseStopped(true)
      }, 3000)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <Dialog
        open={true}
        onClose={setFullScreen}
        fullScreen={isFullScreen}
        sx={{ overflow: 'visible', paddingLeft:'1%' }}
      >
        <DialogContent
          sx={{
            padding: '0px',
            backgroundColor: 'black',
            overflow: 'visible',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'black',
              width: customWidth,
              height: customHeight,
            }}
          >
            <Box>
              <YouTube
                videoId={videoId}
                ref={videoRef}
                opts={{
                  width: customWidth,
                  height: customHeight,
                  playerVars: {
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    modestbranding: 0,
                    fs: 1,
                    rel: 0,
                  },
                }}
                onReady={onPlayerReady}
                onStateChange={onPlayerStateChange}
              />
            </Box>
            {!isMouseStopped && (
              <Box>
                <VideoControlBar
                  secToHHMMSS={secToHHMMSS}
                  onPlayPause={onPlayPause}
                  isPlay={isPlay}
                  onTimelineChange={onTimelineChange}
                  currentTime={currentTime}
                  currentVolume={currentVolume}
                  totalTime={totalTime}
                  onSpeedChange={onSpeedChange}
                  onVolumeChange={onVolumeChange}
                  onFullscreen={setFullScreen}
                  isFullScreen={isFullScreen}
                />
              </Box>
            )}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default YoutubePlayer
