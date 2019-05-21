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

class UserProfile extends Component {
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
                          placeholder: "Email"
                        },
                        {
                          label: "Password",
                          type: "text",
                          placeholder: "Password",
                          defaultValue: ""
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6"]}
                      proprieties={[
                        {
                          label: "Name",
                          type: "text",
                          placeholder: "Name",
                          defaultValue: "John Doe"
                        }
                      ]}
                    />
                    <Button pullRight fill type="submit">
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
