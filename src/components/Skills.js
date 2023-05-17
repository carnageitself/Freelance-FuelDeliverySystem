import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import collab from "../assets/img/collab.png"
import money from "../assets/img/money.png"
import service from "../assets/img/service.png"

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Services</h2>
              <p>
                These are some services we provide online.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={collab} alt="Img" />
                  <h5>Direct Sourcing</h5>
                </div>

                <div className="item">
                  <img src={money} alt="Img" />
                  <h5>Subscription Plan</h5>
                </div>

                <div className="item">
                  <img src={service} alt="Img" />
                  <h5>24/7 Diesel Delivery</h5>
                </div>
               

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
