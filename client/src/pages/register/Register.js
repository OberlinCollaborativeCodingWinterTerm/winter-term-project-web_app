import './register.scss';
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="top">
                    <h1>Study Buddy</h1>
                </div>
                <div className="bottom">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="username"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="name" placeholder="first name"/>
                        <input type="name" placeholder="last name"/>
                        <button>Create Account</button>
                    </form>
                    <Link to="/login">
                        Already have an account?
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Register