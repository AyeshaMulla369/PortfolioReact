import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {


  return (
    <div className='cards' id='proj'>
      <h1>Some project!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/homepage.png'
              text='Social Media Website'
              skills='HTML5 · Cascading Style Sheets (CSS) · PhpMyAdmin · MySQL'
              gitlink = 'https://github.com/AyeshaMulla369/SocialMediaSite'
            />
            <CardItem 
              src='images/weather.png'
              text='Weather app'
              skills='React.JS . Django REST framework'
              gitlink = 'https://github.com/AyeshaMulla369/weatherapp'
            />
            <CardItem
              src='images/attend.png'
              text='Attendence App'
              skills='SQLite · Android Studio · Android Development · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369/AttendenceApp'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ace.png'
              text='ACE app'
              skills='Firebase · Android Studio · Android Development · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369'
            />
            <CardItem
              src='images/grocery.png'
              text='Grocery App'
              skills='SQLite · Android Studio · Android Development · XML · Java'
              gitlink ='https://github.com/AyeshaMulla369/GroceryApp'
            />
            <CardItem
              src='images/emi.png'
              text='EMI notification app'
              skills='SQLite · Android Studio · Android Development · XML · Java'
              gitlink = 'https://github.com/AyeshaMulla369/EMIApp'
            />
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/vr.png'
              text='VR Tour to the museum'
              skills='C# · Virtual Reality (VR) · Unity · Databases'
              gitlink = 'https://github.com/AyeshaMulla369/VRTourToMusem'
            />
            <CardItem
              src='images/hand.png'
              text='3D handtracking'
              skills='Python (Programming Language) · OpenCV · Networking · Unity'
              gitlink = 'https://github.com/AyeshaMulla369/3DHandTracK'
            />
            <CardItem
              src='images/chess.png'
              text='Chess Game'
              skills='Unity 2D . C#'
              gitlink = 'https://github.com/AyeshaMulla369/chessGame'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;