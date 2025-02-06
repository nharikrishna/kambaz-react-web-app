import {NavLink} from 'react-router-dom';

export default function AccountNavigation() {
    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink
                to={`/Kambaz/Account/Signin`}
                className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >
                Signin
            </NavLink>
            <br/>
            <NavLink
                to={`/Kambaz/Account/Signup`}
                className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >
                Signup
            </NavLink>
            <br/>
            <NavLink
                to={`/Kambaz/Account/Profile`}
                className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >
                Profile
            </NavLink>
        </div>
    );
}