import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link,useHistory} from "react-router-dom";


function Header({backButton}) {
  const history = useHistory();
  return (
      //BEM
    <div className="header">
{backButton ? (
  <IconButton onClick={()=>history.replace(backButton)}>
    <ArrowBackIosIcon className="header__icon" fontSize="large"/>
  </IconButton>
):( <IconButton> 
  <PersonIcon className="header__icon" fontSize="large"/>
</IconButton>)}
       
         <Link to="/">
         <img className="header__logo"
         src="https://www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg"
         alt="tinder logo"/>
         </Link>
         
        
        <Link to="/chat">
           <IconButton>
            <ForumIcon className="header__icon"fontSize="large"/>
        </IconButton>

        </Link>
      

            </div>
  )
}

export default Header