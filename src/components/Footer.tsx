import React from 'react';
import './Footer.css';

function Footer() {
  return <footer 
  data-testid="footer"
  className="footer">                  
  <span className="">
  {' '}
  &copy; {new Date().getFullYear()}
  {' NTT DATA - ALL RIGHTS RESERVED'}
</span></footer>;
}

export default Footer;
