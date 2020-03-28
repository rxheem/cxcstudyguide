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

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Get in touch with us to see how we can help you, or how you can help our students."
      author="Raheem McDonald"
    />
  </Layout>
)

export default ContactPage
