import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <input className="form-control wd-username mb-2" type="text"
                   placeholder="Username"/>
            <input className="form-control wd-password mb-2" type="password"
                   placeholder="Password"/>
            <input className="form-control wd-password-verify mb-2" type="password"
                   placeholder="Verify Password"/>
            <Link to="/Kambaz/Account/Signin" id="wd-signup-btn"
                  className="btn btn-primary w-100 mb-2"> Sign Up </Link>
            <Link to="/Kambaz/Dashboard" id="wd-signin-btn"
                  className="btn btn-primary w-100 mb-2"> Sign in </Link>
        </div>
    )
}
