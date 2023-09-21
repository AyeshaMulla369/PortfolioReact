import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container' id='contactPage'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Me</h2>
            <p>Game dev</p>
            <p>Full stack dev</p>
            <p>Android dev</p>
            <p>Competative coder</p>
          </div>
          <div class='footer-link-items'>
            <h2>Languages</h2>
            <p>English</p>
            <p>Hindi</p>
            <p>Kannada</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Hobbies</h2>
            <p>Sketching</p>
            <p>Reading</p>
            <p>Mangas</p>
            <p>Game dev</p>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Ayesha
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>COPYRIGHTS © AYESHA MULLA 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              to='https://www.linkedin.com/in/ayesha-m-432698227'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://github.com/AyeshaMulla369'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;