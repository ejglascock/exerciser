import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...'
  
  return (
    <Box>
        <Typography variant="h3" mb="33px">
            Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}} >{name}</span> exercise videos
        </Typography>
        <Stack 
            justifyContent="flex-start" 
            flexWrap="wrap" 
            sx={{
                flexDirection: { lg: 'row' },
                gap: { lg: '110px', xs: '0' }
            }}
        >
            {exerciseVideos?.slice(0,3).map((item, index) =>  (
                <a
                    key={index}
                    className="exercise-video"
                    href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                </a>
            ))}
        </Stack>
    </Box>
  )
}

export default ExerciseVideos