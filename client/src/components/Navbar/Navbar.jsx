import { useState, useEffect } from "react";
import { Nav, Container, Navbar} from "react-bootstrap";
import LogoImage from "../../Images/Logo-chico.png";
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import './navbar.css';

export const NavBar= ()=> {
    const [activeLink, setActiveLink]= useState('home');  
    const [scrolled, setScrolled]= useState(false); //debo detectar cuándo el usuario scrollea y en base a eso cambio el color de fondo
    
    useEffect(()=>{
        const onScroll= ()=>{
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        
        return ()=> window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink= (value)=>{
        setActiveLink(value);
    }

    return(
    <Navbar expand="lg" className= {scrolled? "scrolled": ""}>
      <Container className="container-nav">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-links">
            <Nav.Link><img className="img-fluid img-size" src= {LogoImage} alt= "Logo" /></Nav.Link>
            <Nav.Link href="#home" className= {activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('home')} >
                Home
            </Nav.Link>
            <Nav.Link href="#skills" className= {activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#work-section" className= {activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick= {()=> onUpdateActiveLink('projects')}>
              Projects
              </Nav.Link>
          </Nav>
          <span className= "navbar-text"> 
            <div className= "social-icon">
                <a href="https://github.com/RocioAlday" target="_blank"><BsGithub className="github"/></a>
                <a href="https://www.linkedin.com/in/rocio-alday" target="_blank"><BsLinkedin className="linkedin"/></a>
            </div>
            <a href="#connect"><button className="contact-button" onClick={()=> console.log('connect')}> <span>Let's connect</span> </button></a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}