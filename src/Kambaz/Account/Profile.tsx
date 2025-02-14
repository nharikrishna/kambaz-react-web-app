import {Link} from "react-router-dom";

export default function Profile() {
    return (
        <div id="wd-profile-screen">
            <h3>Profile</h3>
            <input className="form-control wd-username mb-3" type="text"
                   placeholder="Alice@123"/>
            <input className="form-control wd-password mb-3" type="password" defaultValue="1235354"
                   placeholder="Password"/>
            <input className="form-control mb-3" type="text" defaultValue="Alice"
                   placeholder="First Name" id="wd-firstname"/>
            <input className="form-control mb-3" type="text" defaultValue="Wonderland"
                   placeholder="Last Name" id="wd-lastname"/>
            <input className="form-control mb-3" defaultValue="2000-01-01" type="date" id="wd-dob"/>
            <input className="form-control mb-3" defaultValue="alice@wonderland" type="email"
                   id="wd-email"/>
            <select defaultValue="USER" id="wd-role" className="form-control mb-3">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Link to="/Kambaz/Account/Signin"
                  className="btn btn-danger w-100 mb-3"> Sign Out </Link>
        </div>
    )
}
