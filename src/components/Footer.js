import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import logo from '../assets/icons/logo.png'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" >
        <Stack gap="40px" alignItems="center" px="40px" pt="24px" >
            <img src={logo} alt="logo" width="40px" height="40px" />
            <Typography variant="h5" pb="40px" mt="20px" >
                Project made by Eli Glascock
            </Typography>
        </Stack>
    </Box>
  )
}

export default Footer