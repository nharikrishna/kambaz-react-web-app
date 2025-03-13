import "./styles.css";
import { Navigate, Route, Routes, useParams } from "react-router";
import { useSelector } from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import ProtectedRoute from "./Account/ProtectRoute.tsx";

const EnrollmentProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { cid } = useParams();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isEnrolled = enrollments.some(
        (enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === cid
    );

    if (!isEnrolled) {
        return <Navigate to="/Kambaz/Dashboard" replace />;
    }

    return <>{children}</>;
};

export default function Kambaz() {
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
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/Courses/:cid/*" element={
                            <ProtectedRoute>
                                <EnrollmentProtectedRoute>
                                    <Courses />
                                </EnrollmentProtectedRoute>
                            </ProtectedRoute>
                        }/>
                        <Route path="/Calendar" element={<h1>Calendar</h1>}/>
                        <Route path="/Inbox" element={<h1>Inbox</h1>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}