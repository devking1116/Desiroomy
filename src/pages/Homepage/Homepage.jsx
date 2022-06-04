import * as React from 'react';
import './Homepage.css';
import {Box} from '@mui/material';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
export default function Homepage(){
  return(
    <>
      <Box sx={{width:'100%'}}>
        <div className='body'>
          <div className='roommate-box'>
          <Header/>
            <div className='roommate'>
              <div className='roommate-left'>
                <div className='roommate-title-1'>Let's us help your find</div>
                <div className='roommate-title-2'>ROOMMATE</div>
                <div className='roommate-title-3'>We understand finding a new home as a student<br/> is hard, especially in a different country... And it <br/> shouldn't be that way!.</div>
              </div>
              <div className='roommate-right'>
                <img className='roommate-right-img' src='./assets/image/students-jumping.png'></img>
              </div>
            </div>
            <div className='pagenation'>
              <a href="#diversity">
                <img className='pagenation-icon' src='./assets/image/arrow.png'></img>
              </a>
            </div>
          </div>


          <div className='diversity-box'>
            <div className='diversity' id='diversity'>
              <div className='diversity-left'>
                <img className='diversity-img'src='./assets/image/diversity.png' ></img>
              </div>
              <div className='diversity-right'>
                <div className='diversity-title-1'>We are crazy for</div>
                <div className='diversity-title-2'>DIVERSITY</div>
                <div className='diversity-title-3'>You can find someone your age or from your country.<br/>But we encourage you to explore cultures...It's worth it!</div>
              </div>
            </div>
            <div className='pagenation'>
              <a href="#room">
                <img className='pagenation-icon' src='./assets/image/arrowWhite.png'></img>
              </a>
            </div>
          </div>


          <div className='room-box'>
            <div className='room' id='room'>
                <div className='room-left'>
                  <div className='room-title-1'>
                    <span className='font-size-1'>Find a</span>
                    <span className='font-size-2'>ROOM</span>
                    <span className='font-size-3'>or a</span>
                  </div>
                  <div className='room-title-1-1'>ROOMMATE</div>
                  <div className='room-title-2'>
                    <span className='font-size-1'>Search by</span>
                    <span className='font-size-2'>CITY</span>
                    <span className='font-size-3'>or by</span>
                  </div>
                  <div className='room-title-3'>UNIVERSITY</div>
                  <div className='room-title-4'>And much more to make<br/>you feel home...</div>
                </div>
                <div className='room-right'>
                  <img className='room-img' src='./assets/image/user-profile.png'></img>
                </div>
              </div>
          </div>
        </div>
      </Box>
      <Footer/>
    </>
  );
}