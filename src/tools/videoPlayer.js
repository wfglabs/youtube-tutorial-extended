import React from 'react'
import { Player } from 'video-react'

export default (props) => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://www.youtube.com/watch?v=H4q7G21U8xI"
    />
  )
}
