import "./styles.css";
import { v4 as uuidv4 } from 'uuid';
import {Navigate, Route, Routes} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import {useState} from "react";
import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectRoute.tsx";

export default function Kambaz() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
        logo: "/images/5800_logo.png"
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: uuidv4() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };
    return (
        <div id="wd-kambaz">
            <KambazNavigation/>
            <div className="wd-main-content-offset p-3">
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Kambaz/Account"/>}/>
                        <Route path="/Account/*" element={<Account/>}/>
                        <Route path="/Dashboard" element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/>
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={
                            <ProtectedRoute>
                                <Courses
                                    courses={courses}
                                />
                            </ProtectedRoute>
                            }/>
                        <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                        <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
