import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "../../components/Card/Card";
import { FormInputs } from "../../components/FormInputs/FormInputs";
import { UserCard } from "../../components/UserCard/UserCard";
import Button from "../../components/CustomButton/CustomButton";
import avatar from "../../assets/img/faces/face-0.jpg";
import API from "../../utils/API";
class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.loggedIn = sessionStorage.getItem('loggedin');
    this.state = {
      email: "",
      password: "",
      name: ""
    };
  }


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    let body = {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        ClientId: sessionStorage.getItem('ClientId')
    }
    API.updateLogin(body).then(res => {
      alert("updated");
      this.setState({
        email: res.data.Email,
        name: res.data.Client
      });
    })
        .catch(err => console.log(err));

}

  render() {
    return (
      <div className="content">
        <Container fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3"]}
                      proprieties={[
                        {
                          label: "Email address",
                          type: "email",
                          id: "email",
                          value: this.state.email,
                          placeholder: "Email",
                          onChange: this.handleChange
                        },
                        {
                          label: "Password",
                          type: "text",
                          id: "password",
                          value: this.state.password,
                          placeholder: "Password",
                          onChange: this.handleChange
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      proprieties={[
                        {
                          label: "Name",
                          type: "text",
                          id: "name",
                          value: this.state.name,
                          placeholder: "Name",
                          onChange: this.handleChange
                        }
                      ]}
                    />
                    <Button
                    pullRight
                    fill 
                    type="submit"
                    color="primary"
                    disabled={!this.validateForm()}>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
            <Col md={4}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name="Blake Dragos"
                userName="BlakeDragos"
                description={
                  <span>
                    Web Developer
                  </span>
                }
                socials={
                  <div>
                    <Button simple>
                      <i className="fa fa-facebook-square" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button simple>
                      <i className="fa fa-google-plus-square" />
                    </Button>
                  </div>
                }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
