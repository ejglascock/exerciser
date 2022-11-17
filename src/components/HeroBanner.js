import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => {
  return (
    <Box
        sx={{
            mt: { lg: '150px', xs: '70px' },
            ml: { sm: '50px' }
        }}
        position="relative"
        p="20px"
    >
        <Typography 
            color='#FF2625'
            fontWeight="600"
            fontSize="26px"
        >
            Exerciser
        </Typography>
        <Typography
            fontWeight={700}
            sx={{
                fontSize: {lg: '44px', xs: '40px'}
            }}
            mb="23px"
            mt="30px"
        >
            Sweat, Smile <br /> and Repeat
        </Typography>
        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={4}
        >
            Check out the most effective exercises
        </Typography>
        {/* <Button 
            variant="contained"
            color="error"
            sx={{
                backgroundColor: '#FF2625',
                padding: '10px'
            }}
        >
            Explore Exercises
        </Button> */}
        <Stack>
            <a href="exercise" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
        </Stack>
        <img src={HeroBannerImage} alt="Photo by cottonbro studio from Pexels" className="hero-banner-img" />
        <Typography
            fontWeight={600}
            color="#FF2625"
            sx={{
                opacity: 0.5,
                display: { lg: 'block', xs: 'none'}
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>

    </Box>
  )
}

// Need to update image later

export default HeroBanner