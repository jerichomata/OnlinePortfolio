import { useEffect, useState } from "react";
import jmLogo from '../assets/img/jm-logo.png'
import navIcon1 from '../assets/img/nav-icon1.ico'
import navIcon2 from '../assets/img/nav-icon2.svg'
import resumePdf from '../assets/pdf/resume.pdf'
import { Navbar, Container, Nav } from "react-bootstrap";

    export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={jmLogo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
                <Nav.Link href="#about" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#experience" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                <Nav.Link href="#work" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('work')}>Work</Nav.Link>
                <Nav.Link href="#contact" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/jerichomata/" target="_blank"><img src={navIcon1} alt=""/></a>
                    <a href="https://github.com/jerichomata" target="_blank"><img src={navIcon2} alt=""/></a>
                </div>
                    <a href={resumePdf} without rel="noopener norefferer" target='_blank'>
                        <button className="vvd"><span>Resume</span></button>
                    </a>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>         
    )
}