import React from "react"
import { Link } from "gatsby"
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
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
} from "shards-react"

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.getActive = this.getActive.bind(this)

    this.state = {
      dropdownOpen: false,
      collapseOpen: false,
    }
  }

  toggleDropdown() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen: !this.state.dropdownOpen,
      },
    })
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    })
  }

  getActive(path) {
    if (process.browser) {
      return window.location.path == path
    }
  }

  render() {
    return (
      <header>
        <Navbar type="light" theme="" expand="md">
          <NavbarBrand href="/">{this.props.siteTitle}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} />

          <Collapse open={this.state.collapseOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink active={this.getActive("/")} href="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.getActive("/start/")} href="/start/">
                  Start
                </NavLink>
              </NavItem>
              <Dropdown
                open={this.state.dropdownOpen}
                toggle={this.toggleDropdown}
              >
                <DropdownToggle nav caret>
                  Past Papers
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/yepp">
                    <i className="fas fa-star text-warning mr-2"></i>
                    CSEC Papers
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fas fa-star text-success mr-2"></i>
                    CAPE Papers
                  </DropdownItem>
                  <DropdownItem>
                    <i className="fas fa-star text-danger mr-2"></i>
                    CCSLC Papers
                  </DropdownItem>
                  <hr />
                  <DropdownItem>
                    <i className="fas fa-info-circle text-primary mr-2"></i>
                    Syllabuses and Subject Reports
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink active={this.getActive("/etests/")} href="/">
                  e-Tests
                </NavLink>
              </NavItem>
            </Nav>

            <Nav navbar className="ml-auto">
              <NavLink active={this.getActive("/page-2/")} href="/page-2/">
                Page 2
              </NavLink>
              <NavLink active={this.getActive("/FAQ/")} href="/FAQ/">
                FAQ
              </NavLink>
              <NavLink active={this.getActive("/contact/")} href="/contact/">
                Contact
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )
  }
}
