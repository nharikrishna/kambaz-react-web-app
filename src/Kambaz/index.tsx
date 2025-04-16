import "./styles.css";
import { Navigate, Route, Routes, useParams } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectRoute.tsx";
import Session from "./Account/Session.tsx";
import {useEffect} from "react";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import {setEnrolledCourses, setAllCourses} from "./Courses/reducer.ts";

const EnrollmentProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isEnrolled = enrollments.some(
        (enrollment: any) =>
            enrollment.user === currentUser._id &&
            (cid && enrollment.course === cid)
    );

    if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" replace />;
    }

    return <>{children}</>;
};

export default function Kambaz() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);

    const fetchCourses = async () => {
        try {
            if (currentUser && currentUser._id) {
                const enrolledCourses = await userClient.findMyCourses(currentUser);
                dispatch(setEnrolledCourses(enrolledCourses));

                const allCourses = await courseClient.fetchAllCourses();
                dispatch(setAllCourses(allCourses));

                console.log("Enrolled Courses List", enrolledCourses);
                console.log("All Courses List", allCourses);
            }
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    useEffect(() => {
        if (currentUser) {
            fetchCourses();
        }
    }, [currentUser]);

    return (
        <Session>
            <div id="wd-kambaz">
                <KambazNavigation/>
                <div className="wd-main-content-offset p-3">
                    <div>
                        <Routes>
                            <Route path="/" element={<Navigate to="/Kambaz/Account"/>}/>
                            <Route path="/Account/*" element={<Account/>}/>
                            <Route path="/Dashboard" element={
                                <ProtectedRoute>
                                    <Dashboard/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/Courses/:cid/*" element={
                                <ProtectedRoute>
                                    <EnrollmentProtectedRoute>
                                        <Courses/>
                                    </EnrollmentProtectedRoute>
                                </ProtectedRoute>
                            }/>
                            <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                            <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </Session>
    );
}