import {useParams, useLocation, Link} from "react-router-dom";

export default function CourseNavigation() {
        const {cid} = useParams();
        const location = useLocation();

        const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
                {links.map(link => {
                        const path = `/Kambaz/Courses/${cid}/${link}`;
                        const isActive = location.pathname.includes(path);

                        return (
                            <Link
                                to={path}
                                className={`list-group-item border border-0 ${isActive ? 'active text-dark' :'text-danger'}`}>
                                    {link}
                            </Link>
                        )
                })}
        </div>
    )
}
