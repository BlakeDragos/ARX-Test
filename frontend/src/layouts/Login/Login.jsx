import React, { Component } from "react";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';
import API from "../../utils/API"
import Footer from "../../components/Footer/Footer";

class Login extends Component {
    constructor(props) {
        super(props);
        this.loggedIn = sessionStorage.getItem('loggedin');
        this.state = {
            email: "",
            password: ""
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
            password: this.state.password
        }
        API.getLogin(body).then(res => {
            let response = res.data
            console.log(response);
            if(response){
                sessionStorage.setItem('loggedin', true);
                sessionStorage.setItem('ClientId', response);
                this.props.history.push("/app/dashboard");

            }
          })
          .catch(err => console.log(err));

    }
    render() {
        return (
            <div className="wrapper">
                <Container className="App">
                    <h2>Sign In</h2>
                    <Form onSubmit={this.handleSubmit} className="form">
                        <Col>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="myemail@email.com"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                        <Button
                        block
                        disabled={!this.validateForm()}
                        type="submit"
                        >Login</Button>
                        </Col>
                    </Form>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Login;