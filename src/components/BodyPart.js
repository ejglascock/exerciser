import { Stack } from '@mui/material'
import React from 'react'

const BodyPart = ({ item, bodyPart, setBodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            background: '#fff',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }}
    >
        <img alt="dumbbell" styles={{ width: '40px', height: '40px'}} />
    </Stack>
  )
}

export default BodyPart