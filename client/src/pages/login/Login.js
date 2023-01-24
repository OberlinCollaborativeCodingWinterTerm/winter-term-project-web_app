import './login.scss';

import { Link } from "react-router-dom";
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

function Login() {
    //const registerPage = () => { history.push("/register") }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {login, error, isLoading} = useLogin()


    const handleSubmit = async (e) =>{
        e.preventDefault()
        await login(email, password)
    }

    return (
        <div id="center" className="d-flex flex-column justify-content-center min-vh-100">
            <Container className="text-center p-5 shadow rounded-4 bg-white" style={{ maxWidth: 400 }}>
                <h2 className="pb-4">Login</h2>
                <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <Form.Group controlId="username" >
                        <FloatingLabel label="Email">
                            <Form.Control 
                                type="text" 
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <FloatingLabel label="Password">
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e) =>setPassword(e.target.value)}
                                value={password}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Row className="gx-3">
                        <Col>
                            <Button disabled={isLoading} variant="primary" size="lg" type="submit" className="w-100">Login</Button>
                            {error && <div className="error">{error}</div>}
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