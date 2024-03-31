import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className='cards' id='proj'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/main.png'
              text='Restaurant Website'
              skills='React.js · Firebase'
              gitlink = 'https://github.com/AyeshaMulla369/RestaurantWebsite'
              liveLink= 'https://650af09b63b6e35a18956e97--zesty-valkyrie-84a7c6.netlify.app/'
            />
            <CardItem
              src='images/portfolio.png'
              text='Portfolio Website'
              skills='React.js'
              gitlink = 'https://github.com/AyeshaMulla369/PortfolioReact'
              liveLink = 'https://portfolio-react-sigma-eight.vercel.app/'
            />
            <CardItem 
              src='images/langlearn.png'
              text='Bilingo app'
              skills='React.JS . MERN stack'
              gitlink = 'https://github.com/AyeshaMulla369/LangLearnFrontEnd'
              videolink = 'https://res.cloudinary.com/dnz4gywty/video/upload/v1711854707/pr32ye2zuuujxy5isa7m.mp4'
              description = 'A language learning app that allows you to login and learn french, english and German. An API to upload quizes of lessons plan which is refected in the language leran website'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/vr.png'
              text='VR Tour to the museum'
              skills='C# · Virtual Reality (VR) · Unity3D'
              gitlink = 'https://github.com/AyeshaMulla369/VRTourToMusem'
              videolink = 'https://github.com/AyeshaMulla369/VRTourToMusem/assets/96511827/7b203642-d01f-42f3-a340-52013e0e04e5'
            />
            <CardItem
              src='images/hand.png'
              text='3D handtracking'
              skills='Python · OpenCV · Unity'
              gitlink = 'https://github.com/AyeshaMulla369/3DHandTracK'
            />
            <CardItem
              src='images/chess.png'
              text='Chess Game'
              skills='Unity 2D . C#'
              gitlink = 'https://github.com/AyeshaMulla369/chessGame'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/emi.png'
              text='EMI notification app'
              skills='SQLite · Android Studio · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369/EMIApp'
            />
            <CardItem
              src='images/grocery.png'
              text='Grocery App'
              skills='SQLite · Android Studio  · XML · Java'
              gitlink ='https://github.com/AyeshaMulla369/GroceryApp'
            />
            <CardItem
              src='images/attend.png'
              text='Attendence App'
              skills='SQLite · Android Studio  · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369/AttendenceApp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/homepage.png'
              text='Social Media Website'
              skills='HTML5 · CSS · PhpMyAdmin · MySQL'
              gitlink = 'https://github.com/AyeshaMulla369/SocialMediaSite'
            />
            <CardItem
              src='images/ace1.png'
              text='ACE app'
              skills='Firebase · Android Studio  · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369'
            />
            <CardItem 
              src='images/weather.png'
              text='Weather app'
              skills='React.JS . Django REST framework'
              gitlink = 'https://github.com/AyeshaMulla369/weatherapp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/clubs.png'
              text='SyntHeim'
              skills='MERN . Flask . React Native'
              gitlink = 'https://github.com/AyeshaMulla369/SocialMediaSite'
            />
            <CardItem
              src='images/pried.png'
              text='Pried.in'
              skills='React Native'
              gitlink = 'https://github.com/AyeshaMulla369/SocialMediaSite'
            />
            <CardItem
              src='images/threeD.png'
              text='2D orthographic Views to 3D model'
              skills='Flask . React Native . OpenCV . SCAD'
              gitlink = 'https://github.com/AyeshaMulla369/SocialMediaSite'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;