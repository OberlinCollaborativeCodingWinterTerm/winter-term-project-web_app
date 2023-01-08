import './login.scss';

const Login = () => {
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Study Buddy</h1>
                    <p>
                        Here is a description of the app. This is very descriptive.
                    </p>
                    
                    <span>Don't have an account?</span>
                    <button>Register</button>

                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password"/>
                        <button>Login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login