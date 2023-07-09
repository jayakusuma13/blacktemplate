/*!

=========================================================
* BLK Design System PRO React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function InitialProjects() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <>
      <div className="cd-section" id="projects">
        
        {/* ********* PROJECTS 2 ********* */}
        <div className="projects-2 project-raised">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mb-5" lg="8">
                <h2 className="title">Some of Our Awesome Products - 2</h2>
                <div className="section-space" />
              </Col>
            </Row>
            <Nav
              className="nav-pills-info nav-pills-icons nav-pills-lg"
              pills
              role="tablist"
            >
              <NavItem className="m-auto">
                <NavLink
                  className={activeTab === "1" ? "active" : ""}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <i className="tim-icons icon-spaceship" />
                  Project 1
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink
                  className={activeTab === "2" ? "active" : ""}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <i className="tim-icons icon-bag-16" />
                  Project 2
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink
                  className={activeTab === "3" ? "active" : ""}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <i className="tim-icons icon-light-3" />
                  Project 3
                </NavLink>
              </NavItem>
              <NavItem className="m-auto">
                <NavLink
                  className={activeTab === "4" ? "active" : ""}
                  onClick={() => {
                    toggle("4");
                  }}
                >
                  <i className="tim-icons icon-molecule-40" />
                  Project 4
                </NavLink>
              </NavItem>
              <NavItem className="mx-auto">
                <NavLink
                  className={activeTab === "5" ? "active" : ""}
                  onClick={() => {
                    toggle("5");
                  }}
                >
                  <i className="tim-icons icon-planet" />
                  Project 5
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent className="tab-space" activeTab={"project" + activeTab}>
              <TabPane tabId="project1">
                <Row className="mt-5">
                  <Col md="4">
                    <Card>
                      <div className="card-image h-100">
                        <img
                          alt="..."
                          className="img rounded"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/material-kit-react/material-kit-react.jpeg"
                        />
                      </div>
                      <CardBody className="text-left">
                        <CardFooter className="mt-0">
                          <div className="stats stats-right">
                            <div className="stars text-warning">
                              <i className="tim-icons icon-shape-star" />
                              <i className="tim-icons icon-shape-star ml-1" />
                              <i className="tim-icons icon-shape-star ml-1" />
                              <i className="tim-icons icon-shape-star ml-1" />
                              <i className="tim-icons icon-shape-star ml-1" />
                            </div>
                          </div>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/Tim.png")}
                            />
                            <span className="ml-1">Material Kit React</span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <div className="card-image h-100">
                        <img
                          alt="..."
                          className="img rounded"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/black-dashboard-react/black-dashboard-react.jpg"
                        />
                      </div>
                      <CardBody className="text-left">
                        <CardFooter className="mt-0">
                          <div className="stats stats-right">
                            <i className="tim-icons icon-heart-2 text-danger" />{" "}
                            342 ·{" "}
                            <i className="tim-icons icon-single-copy-04 text-info" />{" "}
                            43
                          </div>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/Tim.png")}
                            />
                            <span className="ml-1">Black Dashboard React</span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col md="4">
                    <Card>
                      <div className="card-image h-100">
                        <img
                          alt="..."
                          className="img rounded"
                          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/main/argon-dashboard-pro-react/argon-dashboard-pro-react.jpg"
                        />
                      </div>
                      <CardBody className="text-left">
                        <CardFooter className="mt-0">
                          <div className="stats stats-right">
                            <i className="tim-icons icon-heart-2 text-danger" />{" "}
                            127
                          </div>
                          <div className="author">
                            <img
                              alt="..."
                              className="avatar img-raised"
                              src={require("assets/img/Tim.png")}
                            />
                            <span className="ml-1">
                              Argon Dashboard Pro React
                            </span>
                          </div>
                        </CardFooter>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="project2">
                <div className="space-100" />
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <p className="description mb-5">
                    Add your information here for Project2.
                  </p>
                </Col>
                <div className="space-100" />
              </TabPane>
              <TabPane tabId="project3">
                <div className="space-100" />
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <p className="description mb-5">
                    Add your information here for Project3.
                  </p>
                </Col>
                <div className="space-100" />
              </TabPane>
              <TabPane tabId="project4">
                <div className="space-100" />
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <p className="description mb-5">
                    Add your information here for Project4.
                  </p>
                </Col>
                <div className="space-100" />
              </TabPane>
              <TabPane tabId="project5">
                <div className="space-100" />
                <Col className="ml-auto mr-auto text-center mt-4" md="8">
                  <p className="description mb-5">
                    Add your information here for Project5.
                  </p>
                </Col>
                <div className="space-100" />
              </TabPane>
            </TabContent>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4" md="8">
                <h3 className="title">Interested in our projects?</h3>
                <h4 className="description mb-5">
                  This is the paragraph where you can write more details about
                  your projects. Keep you user engaged by providing meaningful
                  information.
                </h4>
                <Button color="primary" size="lg">
                  Contact us
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 2 ********* */}
        {/* ********* PROJECTS 3 ********* */}
        <div className="projects-3">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center mb-5" md="8">
                <h6 className="category text-muted">Our work</h6>
                <h2 className="title mt-0">Some of Our Awesome Projects - 3</h2>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col md="6">
                <Card className="card-blog card-plain">
                  <CardHeader>
                    <h2 className="title">Passions</h2>
                    <Badge color="danger" className="mr-1">
                      Methods
                    </Badge>
                    <Badge color="info">Purposes</Badge>
                  </CardHeader>
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/card-blog2.jpg")}
                      />
                    </a>
                  </div>
                  <CardFooter className="text-left">
                    <div className="author">
                      <Button className="btn-round btn-simple" color="primary">
                        <i className="tim-icons icon-triangle-right-17" />
                        View project details
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-blog card-plain">
                  <CardHeader>
                    <h2 className="title">Habits</h2>
                    <Badge color="success">Informations</Badge>
                  </CardHeader>
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/chester-wade.jpg")}
                      />
                    </a>
                  </div>
                  <CardFooter className="text-left">
                    <div className="author">
                      <Button className="btn-round btn-simple" color="success">
                        Find out more
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col md="6">
                <Card className="card-blog card-plain">
                  <CardHeader>
                    <h2 className="title">Sport</h2>
                    <Badge color="warning" className="mr-1">
                      Healthy
                    </Badge>
                    <Badge color="primary">Young</Badge>
                  </CardHeader>
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/fabien-bazanegue.jpg")}
                      />
                    </a>
                  </div>
                  <CardFooter className="text-left">
                    <div className="author">
                      <Button className="btn-round btn-simple" color="warning">
                        Read more
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-blog card-plain">
                  <CardHeader>
                    <h2 className="title">Nights</h2>
                    <Badge color="success" className="mr-1">
                      City
                    </Badge>
                    <Badge color="info" className="mr-1">
                      Urban
                    </Badge>
                    <Badge color="warning">Traffic</Badge>
                  </CardHeader>
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img rounded img-raised"
                        src={require("assets/img/mark-finn.jpg")}
                      />
                    </a>
                  </div>
                  <CardFooter className="text-left">
                    <div className="author">
                      <Button className="btn-round btn-simple" color="info">
                        <i className="tim-icons icon-minimal-right" />
                        Go to page
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 3 ********* */}
        {/* ********* PROJECTS 4 ********* */}
        <div className="projects-4">
          <Container>
            <Row>
              <Col className="mr-auto ml-auto text-center" md="8">
                <h6 className="category text-muted">Our work</h6>
                <h2 className="title mt-0">Some of Our Awesome Projects - 4</h2>
              </Col>
            </Row>
            <div className="space-50" />
            <Row>
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg8.jpg") + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-atom" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Project Alpha</CardTitle>
                    </a>
                    <h6 className="desc">Java App</h6>
                    <Button
                      color="info"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg7.jpg") + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-camera-18" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Project Beta</CardTitle>
                    </a>
                    <h6 className="desc">College project</h6>
                    <Button
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card
                  className="card-background"
                  style={{
                    backgroundImage:
                      "url(" + require("assets/img/bg4.jpg") + ")",
                  }}
                >
                  <CardBody className="text-left">
                    <h6 className="card-category">
                      <i className="tim-icons icon-html5" />
                    </h6>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <CardTitle tag="h1">Project Gama</CardTitle>
                    </a>
                    <h6 className="desc">HTML code</h6>
                    <Button
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Watch Later
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PROJECTS 4 ********* */}
      </div>{" "}
    </>
  );
}
