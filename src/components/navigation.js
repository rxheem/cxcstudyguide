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
    this.toggleDropdown2 = this.toggleDropdown2.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.getActive = this.getActive.bind(this)

    this.state = {
      dropdownOpen: false,
      dropdownOpen2: false,
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

  toggleDropdown2() {
    this.setState({
      ...this.state,
      ...{
        dropdownOpen2: !this.state.dropdownOpen2,
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
                <Dropdown
                  open={this.state.dropdownOpen2}
                  toggle={this.toggleDropdown2}
                >
                  <DropdownToggle nav caret>
                    Start
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/csec.png"
                        alt="csec exam icon"
                        className="nav-icon mr-2"
                      />
                      CSEC
                    </DropdownItem>
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cape.png"
                        alt="cxc exam icon"
                        className="nav-icon mr-2"
                      />
                      CAPE
                    </DropdownItem>

                    <hr />
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/ccslc.png"
                        alt="cxc exam icon"
                        className="nav-icon mr-2"
                      />
                      CCSLC
                    </DropdownItem>
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cpea.png"
                        alt="cxc exam icon"
                        className="nav-icon mr-2"
                      />
                      CPEA
                    </DropdownItem>
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cvq.png"
                        alt="cxc exam icon"
                        className="nav-icon mr-2"
                      />
                      CVQ
                    </DropdownItem>

                    <hr />
                    <DropdownItem href="/">
                      <img
                        style={{ height: "40px" }}
                        src="https://46i48l108maaxssg8uyuvr10-wpengine.netdna-ssl.com/wp-content/uploads/2015/10/cxc-ad.png"
                        alt="cxc exam icon"
                        className="nav-icon mr-2"
                      />
                      CXC Associate Degrees
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <NavLink active={this.getActive("/etests/")} href="/">
                  e-Tests
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
            </Nav>

            <Nav navbar className="ml-auto">
              <NavLink active={this.getActive("/blog/")} href="/blog/">
                Blog
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
