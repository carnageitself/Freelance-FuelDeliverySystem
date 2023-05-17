import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import github from '../assets/img/github.svg';
import linkedin from '../assets/img/nav-icon1.svg';
import fiver from "../assets/img/fiver.svg";
import fuel from "../assets/img/fuel.png"

export const Main = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
         <img src={fuel} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Services
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Products
            </Nav.Link>
            {/*<Nav.Link
              href="#certificates"
              className={
                activeLink === "certificates"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("certificates")}
            >
              Certificates
            </Nav.Link>*/}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/abhishek-pal-668115272/">
                <img src={linkedin} alt="Icon" />
              </a>
              <a href="https://www.fiverr.com/carnageitself?up_rollout=true">
                <img src={fiver} alt="Icon" />
                </a>
              <a href="https://github.com/Abhishek59529">
                <img src={github} alt="Icon" />
                </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Lets Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};