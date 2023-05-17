import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/footerbg2.png";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dh1q2v6",
        "template_3dsy6sq",
        form.current,
        "oiyK82ekyOKggogpg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img
              className="animate__animated animate__zoomIn"
              src={contactImg}
              alt="Contact Us"
            />
            </Col>
            <Col>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  name="user_name"
                />
                <small id="emailHelp" className="form-text text-muted">
                  Enter your full name.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Email"
                  name="user_email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group form-id">
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Message
                </label>
                <textarea name="message" />
                <small id="emailHelp" className="form-text text-muted">
                  We will get in touch with you very soon.
                </small>
                
              </div>
              <button type="submit" className="submit glow">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
