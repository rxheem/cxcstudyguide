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
  Form,
  FormInput,
  FormGroup,
  Container,
  Col,
} from "shards-react"
import $ from "jquery"

class FooterMailingList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
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
        <form
          id="emailsub"
          data-netlify-recaptcha="true"
          name="footer-email-subscription"
          className="form"
          method="POST"
          data-netlify="true"
          netlify
        >
          <FormGroup>
            <FormInput
              id="email"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <br />
            <button className="btn btn-primary" type="submit">
              Join
            </button>
          </FormGroup>
        </form>
      </>
    )
  }
}

export default FooterMailingList
