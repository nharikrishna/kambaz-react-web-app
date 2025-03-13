import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {!currentUser && (
                <>
                    <NavLink
                        to={`/Kambaz/Account/Signin`}
                        className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active text-danger' : 'inactive'}`}
                    >
                        Signin
                    </NavLink>
                    <br/>
                    <NavLink
                        to={`/Kambaz/Account/Signup`}
                        className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active text-danger' : 'inactive'}`}
                    >
                        Signup
                    </NavLink>
                </>
            )}

            {currentUser && (
                <>
                    <NavLink
                        to={`/Kambaz/Account/Profile`}
                        className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active text-danger' : 'inactive'}`}
                    >
                        Profile
                    </NavLink>
                </>
            )}
        </div>
    );
}