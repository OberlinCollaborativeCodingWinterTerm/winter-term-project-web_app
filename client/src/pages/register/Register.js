import './register.scss';
import { Link } from "react-router-dom";
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";


const Register = () => {
    return (
        <div id="center" className="d-flex flex-column justify-content-center min-vh-100">
            <Container className="text-center p-5 shadow rounded-4 bg-white" style={{ maxWidth: 400 }}>
                <h2 className="pb-4">Register</h2>
                <Form className="d-flex flex-column gap-3">
                    <Form.Group controlId="firstName">
                        <FloatingLabel label="First Name">
                            <Form.Control type="text" placeholder="First Name" />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <FloatingLabel label="Last Name">
                            <Form.Control type="text" placeholder="Last Name" />
                        </FloatingLabel>
                    </Form.Group>
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
                    <Link to="/login"><Button variant="primary" size="lg" type="submit" className="w-100">Sign up</Button></Link>
                    <span className="py-1 text-secondary">Already have an account? <Link to="/login">Log in</Link></span>
                </Form>
            </Container>
        </div>
    )
}

export default Register