import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import "./../../styles/sections/_hero.css"
import "./../../styles/global.css"


const Header = () => {
  // const { hero } = useContext(PortfolioContext);
  // const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <div class="container">
  <div class="card">
    <div class="front">
      Johannes Fagerberg
      Hover to see Projects.  
      {/* <div class="logo"><span></span></div> */}
    </div>
    <div class="back">
      <h1>Helen Parker<span>design <i>&</i> photography</span></h1>
      <ul>
        <li>+1-111-111-11-11</li>
        <li>my-email@email.com</li>
        <li>my-site.com</li>
        </ul>
    </div>
    </div>
  </div>
    // <section id="hero" className="jumbotron">
    //   <Container>
    //     <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
    //       <h1 className="hero-title">
    //         hi
    //         {/* {title || 'This is front'}{' '}
    //         <span className="text-color-main">{name || 'Your Name'}</span>
    //         <br />
    //         {subtitle || "Of the Card"} */}
    //       </h1>
    //     </Fade>
    //   </Container>
    // </section>
  );
};

export default Header;