import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Close from '@mui/icons-material/Close';

function CardItem(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if(props.videolink){
      setOpen(true);
    }else if(props.liveLink){
      window.open(props.liveLink, '_blank');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Cardsim'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <p style={{fontStyle:'italic' , fontSize:'0.8rem'}}>{props.skills}</p>
            {(props.videolink || props.liveLink) &&<IconButton aria-label="share" onClick={handleOpen}>
              <PlayCircleIcon />
            </IconButton>}
            <Link 
              to={props.gitlink}
              target='_blank' >
              <IconButton aria-label="add to favorites">
                <GitHubIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </li>
      <Dialog open={open} onClose={handleClose}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h5 className='cards__item__text' style={{ margin: 15, marginLeft:25 }}>{props.text}</h5>
          <IconButton aria-label="close" onClick={handleClose} style={{ margin: 15 }}>
            <Close />
          </IconButton>
        </div>
        <DialogContent>
          <video src={props.videolink} controls autoPlay style={{ maxWidth: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CardItem;
