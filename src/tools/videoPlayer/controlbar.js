import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slider from '@mui/material/Slider'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import SpeedIcon from '@mui/icons-material/Speed'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'

function YourComponent({
  secToHHMMSS,
  customeHeight,
  customWidth,
  totalTime,
  currentTime,
  currentVolume,
  currentSpeed,
  onTimelineChange,
  onPlayPause,
  isPlay,
  onVolumeChange,
  onSpeedChange,
  onFullscreen,
  isFullScreen,
}) {
  const [hoveringOnSound, setHoveringOnSound] = useState(false)
  const [hoveringOnSpeed, setHoveringOnSpeed] = useState(false)

  const handleMouseEnterForSound = () => {
    setHoveringOnSound(true)
  }

  const handleMouseLeaveForSound = () => {
    setHoveringOnSound(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '1%',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}
    >
      <Box>
        <Slider
          size="small"
          min={0}
          max={totalTime}
          value={currentTime}
          onChange={(e) => onTimelineChange(Number(e.target.value))}
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex' }}>
          <Button onClick={onPlayPause}>
            {isPlay ? (
              <PauseIcon />
            ) : (
              <PlayArrowIcon sx={{ fontSize: '200%' }} />
            )}
          </Button>
          <Box
            sx={{ display: 'flex' }}
            onMouseEnter={handleMouseEnterForSound}
            onMouseLeave={handleMouseLeaveForSound}
          >
            <Button>
              <VolumeUpIcon />
            </Button>
            {hoveringOnSound && (
              <Slider
                aria-label="Temperature"
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                color="primary"
                orientation="vertical"
                value={currentVolume}
                max={100}
                min={0}
              />
            )}
          </Box>
          <Box>
            <Typography sx={{ color: 'white' }}>
              {secToHHMMSS(currentTime)} / {secToHHMMSS(totalTime)}
            </Typography>
          </Box>
        </Box>
        <Box>{/* for spacing */}</Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            onMouseEnter={() => setHoveringOnSpeed(true)}
            onMouseLeave={() => setHoveringOnSpeed(false)}
          >
            <Button>
              <SpeedIcon />
              {hoveringOnSpeed && (
                <Select
                  sx={{ marginLeft: '10%', width: '70%' }}
                  size="small"
                  labelId="speed-select"
                  id="speed-select"
                  value={currentSpeed}
                  label="Speed"
                  onChange={(e) => onSpeedChange(Number(e.target.value))}
                >
                  <MenuItem value={0.75}>0.75x</MenuItem>
                  <MenuItem value={1}>1x</MenuItem>
                  <MenuItem value={1.25}>1.25x</MenuItem>
                  <MenuItem value={1.5}>1.5x</MenuItem>
                  <MenuItem value={1.75}>1.75x</MenuItem>
                  <MenuItem value={2}>2x</MenuItem>
                </Select>
              )}
            </Button>
          </Box>
          <Button onClick={onFullscreen}>
            {isFullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default YourComponent
