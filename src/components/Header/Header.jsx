import * as React from 'react';
import './Header.css';
import {Box} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useState ,useEffect} from 'react';
const Header = () => {
  const [hambugerClick,isHambugerClick] = useState(false);
  const handleClick = () => {
    isHambugerClick(!hambugerClick);
  }
  const [isMobile,setIsMobile] = useState(false);
  const handleMobile = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  React.useEffect(() => {
    window.addEventListener('resize',handleMobile);
  })
  return(
    <>
      <Box sx={{width:'100%',background: '#f9f9f9'}}>
        <div className='Header-body'>
          <img src='./assets/image/logo.png'></img>
          <div className='menulist'>
            <a href=''>About us</a>
            <a href=''>Features</a>
            <a href=''>Contact us</a>
          </div>
          {
            isMobile && <IconButton sx={{color:'#0f7ca5'}} onClick={handleClick}>
            <MenuIcon/>
            </IconButton>
          }
          {
            hambugerClick && <div className='mobile-menu'>
            <a href=''>About us</a>
            <a href=''>Features</a>
            <a href=''>Contact us</a>
          </div>
          }

        </div>
      </Box>
    </>
  );
}
export default Header;