import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

import bodyIcon from '../assets/icons/body.png';
import targetIcon from '../assets/icons/target.png';
import equipmentIcon from '../assets/icons/equipment.png';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraDetail = [
    {
        icon: bodyIcon,
        name: bodyPart
    },
    {
        icon: targetIcon,
        name: target
    },
    {
        icon: equipmentIcon,
        name: equipment
    }
  ]

  return (
    <Stack
        gap="60px"
        sx={{
            flexDirection: { lg: 'row' },
            p: '20px',
            alignItems: 'center'
        }}
    >
        <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize" >
                {name}
            </Typography>
            <Typography variant="h6" >
                Exercises keep you strong. 
                The <span style={{color: '#ff2625', textTransform: 'capitalize'}} >{`${name}`}</span> is one of the best exercises to target your {target}. 
                It will help you improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item) => (
                <Stack
                    key={item.name}
                    direction="row"
                    gap="24px"
                    alignItems="center"
                >
                    <Button
                        sx={{
                            background: '#fff2db',
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        <img 
                            src={item.icon} 
                            alt={item.name} 
                            style={{ width: '50px', height: '50px' }}
                        />
                    </Button>
                    <Typography textTransform="capitalize" variant="h5" >
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail