import CourseNavigation from "./Navigation.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor.tsx";

export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 5100</h2>
            <hr/>
            <table>
                <tr>
                    <td valign="top">
                        <CourseNavigation/>
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home />}/>
                            <Route path="Modules" element={<Modules />}/>
                            <Route path="Assignments" element={<Assignments />}/>
                            <Route path="Assignments/:aid" element={<AssignmentEditor />}/>
                            <Route path="People" element={<h2>People</h2>}/>
                        </Routes>
                    </td>
                </tr>
            </table>

        </div>
    )
}
