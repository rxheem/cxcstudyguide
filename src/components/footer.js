import React from "react"
import { Link } from "gatsby"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Collapse,
  Container,
  Row,
  Col,
  Nav as ShardsNav,
} from "shards-react"
import Nav from "react-bootstrap/Nav"
import SocialMediaIcons from "./socialMediaIcons"
import FooterMailingList from "./footerMailingList"

class Footer extends React.Component {
  render() {
    return (
      <>
        <br />
        <br />
        <footer className="footer" name="footer" id="footer">
          <div className="bg-light">
            <Container>
              <Row>
                <Col sm={12} md={4} lg={4} xl={4}>
                  <br />
                  <h6 className="ml-2">Popular CSEC Subjects</h6>
                  <ShardsNav
                    vertical
                    navbar={false}
                    className="flex-column"
                    navbar
                    className="ml-4"
                  >
                    <NavItem>
                      <NavLink href="/csec/mathematics/">
                        <i className="fas fa-square-root-alt text-dark mr-2"></i>
                        Mathematics
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/csec/english-a/">
                        <i className="fas fa-spell-check text-danger mr-2"></i>
                        English A
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/csec/chemistry/">
                        <i className="fas fa-flask text-success mr-2"></i>
                        Chemistry
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/csec/information-technology/">
                        <i className="fas fa-desktop text-black mr-2"></i>
                        Information Technology
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/csec/principles-of-accounts/">
                        <i className="fas fa-sort-numeric-up text-dark mr-2"></i>
                        Principles of Accounts
                      </NavLink>
                    </NavItem>
                  </ShardsNav>
                  <br />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4}>
                  <br />
                  <h6 className="ml-2">Popular CAPE Subjects</h6>
                  <ShardsNav
                    vertical
                    navbar={false}
                    className="flex-column"
                    navbar
                    className="ml-4"
                  >
                    <NavItem>
                      <NavLink href="/cape/communication-studies/">
                        Communication Studies
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Biology</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cape/computer-science/">
                        Computer Science
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/cape/sociology/">Sociology</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Applied Mathematics</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Economics</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Chemistry</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="/">Spanish</NavLink>
                    </NavItem>
                  </ShardsNav>
                  <br />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4}>
                  <br />
                  <h6>Mailing List</h6>

                  <FooterMailingList />
                  <br />
                </Col>
              </Row>
            </Container>
          </div>
          <div className="bg-dark">
            <Container>
              <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <h6 className="text-white">Student Opportunities</h6>

                  <ShardsNav
                    vertical
                    navbar={false}
                    className="flex-column"
                    navbar
                  >
                    <NavItem>
                      <NavLink className="footer-link" href="/">
                        Youth Development Programmes
                      </NavLink>
                      <NavLink className="footer-link" href="/">
                        Summer Jobs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/">
                        Scholarships
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/">
                        College Counselling
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                  </ShardsNav>

                  <br />
                </Col>
                <Col
                  sm={12}
                  md={3}
                  lg={3}
                  xl={3}
                  style={{ marginLeft: "-10px" }}
                >
                  <br />
                  <h6 className="text-white ml-2"></h6>
                  <ShardsNav
                    vertical
                    navbar={false}
                    className="flex-column"
                    navbar
                  >
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                  </ShardsNav>
                  <br />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <h6 className="text-white"></h6>
                  <ShardsNav
                    vertical
                    navbar={false}
                    className="flex-column"
                    navbar
                  >
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="footer-link" href="/"></NavLink>
                    </NavItem>
                  </ShardsNav>
                  <br />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />

                  <br />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}></Col>
              </Row>
            </Container>
          </div>
          <div className="bg-light">
            <br />
            <br />
            <Container>
              <Row>
                <Col sm={12} md={6} lg={6} xl={6}>
                  <h4>Disclaimer</h4>

                  <p>
                    We are an independent group and are not affiliated with the{" "}
                    <a href="https://www.cxc.org/" target="_blank">
                      Caribbean Examination Council
                    </a>
                    .
                  </p>

                  <SocialMediaIcons />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <h6>Policies</h6>

                  <Nav className="flex-column" style={{ marginLeft: "-15px" }}>
                    <Nav.Link className="" href="/about/">
                      About Us
                    </Nav.Link>
                    <Nav.Link className="" href="/terms/">
                      Terms of Use
                    </Nav.Link>
                    <Nav.Link className="" href="/privacy/">
                      Privacy Polocy
                    </Nav.Link>
                    <Nav.Link className="" href="/FAQ/">
                      Frequently Asked Questions
                    </Nav.Link>
                    <Nav.Link className="" href="/notices/">
                      Notices
                    </Nav.Link>
                    <Nav.Link className="" href="/help/">
                      Help Centre
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br className="d-lg-none" />
                  <h6>Related Links</h6>

                  <Nav className="flex-column" style={{ marginLeft: "-15px" }}>
                    <Nav.Link
                      target="_blank"
                      className=""
                      href="https://www.paperbin.xyz/past-papers"
                    >
                      Paperbin Past Papers
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      className=""
                      href="http://cxc-store.com/"
                    >
                      CXC Store
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      className=""
                      href="http://www.cxc.org/demo-etests/"
                    >
                      CXC e-Tests
                    </Nav.Link>
                    <Nav.Link
                      target="_blank"
                      className=""
                      href="https://ors.cxc.org/studentportal"
                    >
                      CXC Student Portal
                    </Nav.Link>
                  </Nav>
                </Col>
              </Row>
              <br />
            </Container>
            <br />
          </div>
        </footer>
      </>
    )
  }
}

export default Footer
