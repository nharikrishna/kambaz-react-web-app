import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h3>Sign in</h3>
            <input className="form-control wd-username mb-2" type="text"
                   placeholder="Username"/>
            <input className="form-control wd-password mb-2" type="password"
                   placeholder="Password"/>
            <Link to="/Kambaz/Dashboard" id="wd-signin-btn"
                  className="btn btn-primary w-100 mb-2"> Sign in </Link>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-btn"
                  className="btn btn-primary w-100 mb-2"> Sign Up </Link>
        </div>
    )
}

