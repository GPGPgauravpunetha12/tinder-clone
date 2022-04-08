import React from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import "./SwipeButtons.css";
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
   
       <div className="swipeButtons">
           <IconButton className="swipeButtons__repeat">
               <ReplayIcon fontsize="large"/>
               </IconButton>

               <IconButton className="swipeButtons__left">
               <CloseIcon fontsize="large"/>
               </IconButton>

               <IconButton className="swipeButtons__star">
               <StarRateIcon fontsize="large"/>
               </IconButton>

               <IconButton className="swipeButtons__right">
               <FavoriteIcon fontsize="large"/>
               </IconButton>

               <IconButton className="swipeButtons__lightning">
               <FlashOnIcon fontsize="large"/>
               </IconButton>

    </div>
  )
}

export default SwipeButtons