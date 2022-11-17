import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard';
import leftArrow from '../assets/icons/left_arrow.png';
import rightArrow from '../assets/icons/right_arrow.png';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography className="left-arrow" onClick={() => scrollPrev()} width="50px">
        <img src={leftArrow} alt="left-arrow" height="40px" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography className="right-arrow" onClick={() => scrollNext()} width="50px">
        <img src={rightArrow} alt="right-arrow" height="40px" />
      </Typography>
    );
  };

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
        {data.map((item) => (
            <Box 
                key={item.id || item}
                itemID={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                {isBodyParts ? 
                    <BodyPart 
                        item={item} 
                        bodyPart={bodyPart} 
                        setBodyPart={setBodyPart}
                    />
                    : <ExerciseCard exercise={item} />}
            </Box>
            )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar