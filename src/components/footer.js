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
            <br />
          </div>
          <div className="bg-dark">
            <Container>
              <Row>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <h6 className="text-white">Yah Yah Yah</h6>
                  <Nav className="flex-column" style={{ marginLeft: "-10px" }}>
                    <Nav.Link className="text-white" href="/">
                      Active
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Disabled
                    </Nav.Link>
                  </Nav>
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
                  <h6 className="text-white ml-2">Yah Yah Yah</h6>
                  <Nav className="flex-column">
                    <Nav.Link className="text-white" href="/">
                      Active
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Disabled
                    </Nav.Link>
                  </Nav>
                  <br />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <h6 className="text-white">Yah Yah Yah</h6>
                  <Nav className="flex-column" style={{ marginLeft: "-10px" }}>
                    <Nav.Link className="text-white" href="/">
                      Active
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Link
                    </Nav.Link>
                    <Nav.Link className="text-white" href="/">
                      Disabled
                    </Nav.Link>
                  </Nav>
                  <br />
                </Col>
                <Col sm={12} md={3} lg={3} xl={3}>
                  <br />
                  <h6 className="text-white">Mailing List</h6>

                  <FooterMailingList />
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
