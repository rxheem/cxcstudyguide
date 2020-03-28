import React from "react"
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

const startText = "Start learning"

const SubjectLineup = () => (
  <div>
    <Container fluid>
      <Row>
        <Col sm={12} md={3} lg={3} xl={3}>
          <Card>
            <CardImg
              className="card-img"
              style={{ width: "100%" }}
              src="https://www.englishclub.com/images/grammar/grammar-og.png"
            />
            <CardBody>
              <CardTitle>English A</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button theme="warning">{startText} &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3}>
          <br className="d-md-none" />
          <Card>
            <CardImg
              className="card-img"
              style={{ width: "100%" }}
              src="https://image.freepik.com/free-psd/mathematics-geometry-formulas-with-green-pencils_23-2148347756.jpg"
            />
            <CardBody>
              <CardTitle>Mathematics</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button theme="info">{startText} &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3}>
          <br className="d-md-none" />
          <Card>
            <CardImg
              className="card-img"
              style={{ width: "100%", height: "70%" }}
              src="https://www.swedishnomad.com/wp-content/images/2019/08/Spanish-Words-2.webp"
            />
            <CardBody>
              <CardTitle>Spanish</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button theme="danger">{startText} &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm={12} md={3} lg={3} xl={3}>
          <br className="d-md-none" />
          <Card>
            <CardImg
              className="card-img"
              style={{ width: "100%" }}
              src="https://www.universitymagazine.ca/wp-content/uploads/2018/02/How-To-Major-In-Biology.jpg"
            />
            <CardBody>
              <CardTitle>Biology</CardTitle>
              <p>Lorem ipsum dolor sit amet.</p>
              <Button theme="success">{startText} &rarr;</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
)

export default SubjectLineup
