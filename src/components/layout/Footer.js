import React from 'react';
import laptop from './Smiling-Laptop.png';

const Footer = () => {
  return (
    <footer className='bg-primary fixed-bottom'>
      <div className='container my-2'>
        <div className='row'>
          <div className='col-12 text-center'>
            <p className='footer-tagline h4'>
              TIM + <i className='fas fa-code' aria-hidden='true'></i> ={' '}
              <img className='img-fluid' src={laptop} alt='' />
            </p>
            <p>
              <a
                href='https://timlemke.github.io/'
                target='_blank'
                rel='noreferrer'
              >
                timlemke.github.io
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
