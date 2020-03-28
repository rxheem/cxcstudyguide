import React from "react"
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
import FA from "react-fontawesome"

const SocialMediaIcons = position => {
  return (
    <div>
      <Nav className="">
        <NavItem>
          <NavLink
            target="_blank"
            href="https://www.youtube.com/channel/UC0eO_ApReknTjj50B7_LQyw"
          >
            <i
              className="fab fa-youtube fa-lg"
              style={{ color: "#f00", paddingRight: "10px" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            target="_blank"
            href="https://www.instagram.com/cxcstudyguide/"
          >
            <i
              className="fab fa-instagram fa-lg"
              style={{ color: "purple", paddingRight: "10px" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            target="_blank"
            href="https://www.facebook.com/cxcspanishguide/"
          >
            <i
              className="fab fa-facebook fa-lg"
              name="facebook"
              style={{ paddingRight: "10px" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink target="_blank" href="mailto:raheemmcdonald@icloud.com">
            <FA
              name="envelope"
              className="fas fa-lg"
              style={{ color: "grey", paddingRight: "10px" }}
            />
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  )
}

export default SocialMediaIcons
