import React from "react"
import { Link } from "gatsby"

import {
  Card,
  CardHeader,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  Button,
  Row,
  Form,
  FormInput,
  FormGroup,
  Container,
  Col,
} from "shards-react"

import Draggable from "react-draggable"

class SignInComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    // Set the state
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
        <Draggable>
          <Card>
            <CardBody>
              <CardTitle>Sign in</CardTitle>
              <Form>
                <FormGroup>
                  <label htmlFor="#email">Email</label>
                  <FormInput
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="#password">Password</label>
                  <FormInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </Form>
              <Button>Read more &rarr;</Button>
            </CardBody>
            <CardFooter>Card footer</CardFooter>
          </Card>
        </Draggable>
      </>
    )
  }
}

export default SignInComponent
