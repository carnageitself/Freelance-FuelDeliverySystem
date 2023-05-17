import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";


const Projects = () => {

    const projects1 = [
        {
          title: "ChatGPT 2.0",
          description: "Advance ChatGPT which works on voice assistant.",
          imgUrl: "",
        },
       
      ];

    return ( 
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Products</h2>
                    <p>Let our advance worrying become advance thinking and planning.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects1.map((project, index) => {
                                    return (
                                        <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second"><p></p></Tab.Pane>
                    <Tab.Pane eventKey="third"><p></p></Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                    </Col>
                </Row>
            </Container>
           
        </section>
    );
}
 
export default Projects;