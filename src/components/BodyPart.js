import { Stack, Typography } from '@mui/material'
import React from 'react'
import allIcon from '../assets/icons/all.png'

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
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={allIcon} alt="dumbbell" style={{ width: '40px', height: '40px'}} />
        <Typography
            fontSize="24px"
            fontWeight="bold"
            color="#2A1212"
            textTransform="capitalize"
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart