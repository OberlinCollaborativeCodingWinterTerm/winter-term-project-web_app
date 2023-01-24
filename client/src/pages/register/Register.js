import './register.scss';
import { Link } from "react-router-dom";
import {Button, Container, FloatingLabel, Form} from "react-bootstrap";
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

const Register = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {signup, error, isLoading} = useSignup()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await signup(firstName, lastName, email, password)
        this.props.history.push("/")
       // await signup( email, password)
        // console.log(firstName, lastName, email,password)
    }
    return (
        <div id="center" className="d-flex flex-column justify-content-center min-vh-100">
            <Container className="text-center p-5 shadow rounded-4 bg-white" style={{ maxWidth: 400 }}>
                <h2 className="pb-4">Register</h2>
                <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
                        <FloatingLabel label="First Name">
                            <Form.Control 
                                type="text" 
                                placeholder="First Name" 
                                onChange={(e) => setFirstName(e.target.value)}
                                value={firstName}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="lastName">
                        <FloatingLabel label="Last Name">
                            <Form.Control 
                                type="text" 
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                value={lastName} />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="email" >
                        <FloatingLabel label="Email">
                            <Form.Control 
                                type="text" 
                                placeholder="Email" 
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}/>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <FloatingLabel label="Password">
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}/>
                        </FloatingLabel>
                    </Form.Group>
                    
                    <Button disabled={isLoading} variant="primary" size="lg" type="submit" className="w-100">Sign up</Button>
                   
                    {error && <div className="error">{error}</div>}
                    <span className="py-1 text-secondary">Already have an account? <Link to="/login">Log in</Link></span>
                </Form>
            </Container>
        </div>
    )
}

export default Register