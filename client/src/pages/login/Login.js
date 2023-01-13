import './login.scss';

import { Link } from "react-router-dom";
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";

function Login() {
    //const history = useHistory();

    //const registerPage = () => { history.push("/register") }

    return (
        <div id="center" className="d-flex flex-column justify-content-center min-vh-100">
            <Container className="text-center p-5 shadow rounded-4 bg-white" style={{ maxWidth: 400 }}>
                <h2 className="pb-4">Login</h2>
                <Form className="d-flex flex-column gap-3">
                    <Form.Group controlId="username" >
                        <FloatingLabel label="Username">
                            <Form.Control type="text" placeholder="Username" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <FloatingLabel label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="gx-3">
                        <Col>
                            <Link to="/"><Button variant="primary" size="lg" type="submit" className="w-100">Login</Button></Link>
                        </Col>
                        <Col>
                            <Link to="/register"><Button variant="outline-primary" size="lg" className="w-100">Register</Button></Link>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    )
}

export default Login