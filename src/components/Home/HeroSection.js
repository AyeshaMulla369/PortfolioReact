import React , {useState , useEffect} from 'react';
import { Button } from '../Button/Button';
import '../../App.css';
import './HeroSection.css';
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function HeroSection() {
    const [cursorX , setCursorX] = useState();
    const [cursorY , setCursorY] = useState();

    
  
    window.addEventListener('mousemove',(e)=>{
      setCursorX(e.pageX);
      setCursorY(e.pageY);
    });


    const onButtonClick = () => {
      // using Java Script method to get PDF file
      fetch('Resume.pdf').then(response => {
          response.blob().then(blob => {
              // Creating new object of PDF file
              const fileURL = window.URL.createObjectURL(blob);
              // Setting various property values
              let alink = document.createElement('a');
              alink.href = fileURL;
              alink.download = 'Resume.pdf';
              alink.click();
          })
      })
  }

  
  useEffect(()=>{
    AOS.init();
  },[]);

  
  
    return (
      <div class='hero-container' id='homew'>
        <div id='home'>
         
         <div className='cursor'
           style={{
             left: cursorX+'px',
             top: cursorY +'px'
           }
           }></div>
         <div className='cursorfollow'
           style={{
             left: cursorX+20+'px',
             top: cursorY+20 +'px'
           }
         }></div>
       </div>
          <h1 data-aos="slide-right" data-aos-duration="4000">I'M AYESHA MULLA</h1>
          <p data-aos="slide-right" data-aos-duration="4000">SOFTWARE DEVELOPER</p>
          <div className='hero-btns'>
          <HashLink smooth to='/#contactPage' >
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
              >
              
                CONNECT HERE
              
              </Button>
              </HashLink>

              <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={onButtonClick}
              >
                DOWNLOAD CV
              </Button>
        </div>
      </div>
    );
}

export default HeroSection