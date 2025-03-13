import { useSelector } from "react-redux";
import CourseNavigation from "./Navigation.tsx";
import {Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor.tsx";
import {FaAlignJustify} from "react-icons/fa";
import PeopleTable from "./People/Table.tsx";

export default function Courses() {
    const { cid } = useParams();
    const { pathname } = useLocation();
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const course = courses.find((course: any) => course._id === cid);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FaAlignJustify className="me-4 fs-4 mb-1"/>
                {course && course.description} &gt; {pathname.split("/")[4]}</h2>
            <hr/>

            <div className="d-flex">
                <div className="d-none d-md-block">
                    <CourseNavigation/>
                </div>
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home"/>}/>
                        <Route path="Home" element={<Home/>}/>
                        <Route path="Modules" element={<Modules/>}/>
                        <Route path="Assignments" element={<Assignments/>}/>
                        <Route path="Assignments/:aid" element={<AssignmentEditor/>}/>
                        <Route path="People" element={<PeopleTable/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}