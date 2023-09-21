import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';

function CardItem(props) {

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p style={{fontStyle:'italic' , fontSize:'0.8rem'}}>{props.skills}</p>
            <Link 
            to={props.gitlink}
            target='_blank' >
            <Button
              className='btns'
              buttonStyle='btn--outline--black'
              buttonSize='btn--medium'
              >
              
                GITHUB
              
              </Button>
              </Link>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;