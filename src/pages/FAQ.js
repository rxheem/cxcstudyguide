import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Container,
  Col,
} from "shards-react"

const IndexPage = () => (
  <Layout>
    <SEO title="Frequently Asked Questions" />

    <Container>
      <br />
      <Row>
        <Col sm={12} md={8} lg={8}></Col>
        <Col sm={12} md={4} lg={4}></Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
