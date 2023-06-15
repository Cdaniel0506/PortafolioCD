
import {useEffect, useState} from 'react'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container, Nav } from 'react-bootstrap'
import "./styles/Navbar.css"

const NavBar = () => {
    /*estado que almacena en que enlace estoy */
    const [activeLink, setActiveLink] = useState('home');
    /*estado para detectar el desplazamiento del scroll y cambiar el color del fondo */
    const [scrolled, setScrolled] = useState(false);

    /*este efecto que detectara si se esta desplazando o no, el efecto se activara cuando empiece a moverse */
    useEffect(() => {
        const onScrolled = () => {
            if(window.scrollY < 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScrolled);
        //esto eliminara el dectetor de eventos y en el mismo evento
        return () => window.removeEventListener('scroll', onScrolled);
    }, [])
    
    // esto atualizar la funcion constatntemente
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        /*Estoy usando una libreria de bootstrap para realizar mi portafolio en este caso una libreria de Navbar de bootstrap */
        <Navbar  expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <h3>ACADEMLO</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')}>About Me</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#contacts" className={activeLink === 'contacts' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contacts')}>Contacts</Nav.Link>                        
                    </Nav>
                    <span className="navbar-tex">
                        <div className="social-icon">
                            <a href="#"><i className='bx bxs-bot bx-tada' ></i></a>
                            <a href="#"><i className='bx bx-bot bx-flashing' ></i></a>
                            <a href="#"><i className='bx bx-smile'></i></a>
                        </div>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar