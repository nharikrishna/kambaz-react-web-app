import {NavLink} from "react-router-dom";

export default function CourseNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <NavLink to="/Kambaz/Courses/5100/Home" id="wd-course-home-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Home</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Modules" id="wd-course-modules-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Modules</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Piazza" id="wd-course-piazza-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Piazza</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Zoom" id="wd-course-zoom-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Zoom</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Assignments" id="wd-course-quizzes-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Assignments</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Quizzes" id="wd-course-assignments-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Quizzes</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/Grades" id="wd-course-grades-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >Grades</NavLink><br/>
            <NavLink to="/Kambaz/Courses/5100/People" id="wd-course-people-link"
                     className={({isActive}) => `list-group-item border border-0 ${isActive ? 'active' : 'inactive'}`}
            >People</NavLink><br/>
        </div>
    )
}
