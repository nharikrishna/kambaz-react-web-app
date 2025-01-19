import Signin from "./Signin";
import Profile from "./Profile.tsx";
import Signup from "./Singup.tsx";
import AccountNavigation from "./Navigation.tsx";
import {Navigate, Route, Routes} from "react-router-dom";

export default function Account() {
    return (
        <div id="wd-account-screen">
            <table>
                <tr>
                    <td valign="top">
                        <AccountNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kambaz/Account/Signin"/>}/>
                            <Route path="/Signin" element={<Signin/>}/>
                            <Route path="/Profile" element={<Profile/>}/>
                            <Route path="/Signup" element={<Signup/>}/>
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>

    )
}
