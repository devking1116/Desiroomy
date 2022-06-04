import * as React from 'react';
import './Footer.css';
import {Box,Button} from '@mui/material';
import {styled} from '@mui/material/styles';

const FooterButton = styled(Button)({
  background:'#f4dcf8',
  color:'#6e6a6a',
  fontFamily:'Montserrat',
  fontStyle:'normal',
  border:'1px solid #6e6a6a',
  width:'100%',
  margin:'auto',
  marginTop:'25px',
  borderRadius:'10px',
  lineHeight:'35px',
  minWidth:'300px'
})
const Footer = () => {
  return(
    <>
      <Box sx={{width:'100%',background:'#a476c3'}}>
        <div className='footer-main'>
          <div>
            <div className='footer-title'>JOIN THE WAITLIST</div>
            <FooterButton>Please enter your email address</FooterButton>
          </div>
        </div>
        <div className='footer-title1'>Vectors designed by FreePik</div>
      </Box>
      
    </>
  );
}
export default Footer;
