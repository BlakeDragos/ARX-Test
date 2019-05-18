import React, { Component } from "react";
//import { Route, Switch } from "react-router-dom";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
//import API from "../../utils/API"
import Footer from "../../components/Footer/Footer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="wrapper">
                <Container className="App">
                    <h2>Sign In</h2>
                    <Form className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="myemail@email.com"
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                />
                            </FormGroup>
                        </Col>
                        <Button>Submit</Button>
                    </Form>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Login;