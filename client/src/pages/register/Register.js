import './register.css';

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
                        <input type="name" placeholder="name"/>
                        <button>Create Account</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register