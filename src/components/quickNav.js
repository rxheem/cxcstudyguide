import React from "react"
import { BrowserView, MobileView } from "react-device-detect"
import { Link } from "gatsby"
import Dropdown from "react-bootstrap/Dropdown"

import {
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardHeader,
  NavItem,
  Nav,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
} from "shards-react"

const QuickNav = props => {
  return (
    <>
      <BrowserView>
        <Nav className="justify-content-center">
          <NavItem>
            <Link className="nav-link" to="/">
              Spanish
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              Biology
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              Chemistry
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              Physics
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              English A
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              Mathematics
            </Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/">
              Social Studies
            </Link>
          </NavItem>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-custom-1">Join us</Dropdown.Toggle>

            <Dropdown.Menu className="super-colors">
              <Dropdown.Item href="/" eventKey="1">
                I am a teacher
              </Dropdown.Item>
              <Dropdown.Item href="/" eventKey="2">
                I am a student
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/" eventKey="4">
                <i className="far fa-building mr-2"></i>
                Organization
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </BrowserView>
    </>
  )
}

export default QuickNav
