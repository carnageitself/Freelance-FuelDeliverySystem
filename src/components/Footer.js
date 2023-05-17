import { Container, Row, Col } from "react-bootstrap";
import instagram from "../assets/img/nav-icon3.svg";
import whatsApp from "../assets/img/whatsapp.svg";
// import contra from '../assets/img/contra2.png';
import behance from "../assets/img/behance.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="back" id="bg">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
           {/* <img src={contra} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://wa.me/+918268864247">
                <img src={whatsApp} alt="" />
              </a>
              <a href="https://www.behance.net/carnageop">
                <img src={behance} alt="" />
              </a>
              <a href="https://instagram.com/_abhishek_29?igshid=ZDdkNTZiNTM=">
                <img src={instagram} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
