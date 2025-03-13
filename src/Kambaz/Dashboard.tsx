import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse, setCourse, updateCourseField } from "./Courses/reducer";
import { addEnrollment, deleteEnrollment } from "./Enrollments/reducer";

export default function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAllCourses, setShowAllCourses] = useState(false);

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses, currentCourse } = useSelector((state: any) => state.coursesReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isFaculty = currentUser && currentUser.role === "FACULTY";

    const userEnrollments = enrollments.filter((enrollment: any) =>
        enrollment.user === currentUser._id
    );

    const enrolledCourseIds = userEnrollments.map((enrollment: any) =>
        enrollment.course
    );

    const filteredCourses = showAllCourses
        ? courses
        : courses.filter((course: any) => enrolledCourseIds.includes(course._id));

    const handleAddNewCourse = () => {
        dispatch(addCourse());
    };

    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
    };

    const handleUpdateCourse = () => {
        dispatch(updateCourse());
    };

    const handleSetCourse = (course: any) => {
        dispatch(setCourse(course));
    };

    const handleFieldChange = (field: string, value: string) => {
        dispatch(updateCourseField({ field, value }));
    };

    const handleEnroll = (courseId: string) => {
        const newEnrollment = {
            user: currentUser._id,
            course: courseId
        };
        dispatch(addEnrollment(newEnrollment));
    };

    const handleUnenroll = (courseId: string) => {
        const enrollmentToDelete = enrollments.find(
            (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === courseId
        );

        if (enrollmentToDelete) {
            dispatch(deleteEnrollment(enrollmentToDelete._id));
        }
    };

    const toggleEnrollmentView = () => {
        setShowAllCourses(!showAllCourses);
    };

    const handleCourseNavigation = (event: React.MouseEvent, courseId: string) => {
        if (!enrolledCourseIds.includes(courseId)) {
            event.preventDefault();
            alert("You must be enrolled in this course to access it.");
            return;
        }

        navigate(`/Kambaz/Courses/${courseId}/Home`);
    };

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">
                Dashboard
                <Button
                    className="float-end"
                    variant="primary"
                    onClick={toggleEnrollmentView}
                >
                    {showAllCourses ? "Enrollments" : "All Courses"}
                </Button>
            </h1>
            <hr/>
            {isFaculty && (
                <>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                                id="wd-add-new-course-click"
                                onClick={handleAddNewCourse}> Add </button>
                        <button className="btn btn-warning float-end me-2"
                                onClick={handleUpdateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>

                    <br/>
                    <FormControl value={currentCourse.name} className="mb-2"
                                 onChange={(e) => handleFieldChange("name", e.target.value)}/>
                    <FormControl as="textarea" value={currentCourse.description} rows={3}
                                 onChange={(e) => handleFieldChange("description", e.target.value)}/>
                </>
            )}
            <h2 id="wd-dashboard-published">
                {showAllCourses ? "All Courses" : "My Courses"} ({filteredCourses.length})
            </h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {filteredCourses.map((course: any) => {
                        const isEnrolled = enrolledCourseIds.includes(course._id);

                        return (
                            <Col key={course._id} className="wd-dashboard-course" style={{width: "300px"}}>
                                <Card>
                                    <div
                                        onClick={(e) => handleCourseNavigation(e, course._id)}
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                        style={{ cursor: "pointer" }}
                                    >
                                        <Card.Img src={course.logo} variant="top" width="100%"
                                                  height={160}/>
                                        <Card.Body className="card-body">
                                            <Card.Title
                                                className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name} </Card.Title>
                                            <Card.Text
                                                className="wd-dashboard-course-description overflow-hidden"
                                                style={{height: "100px"}}>
                                                {course.description} </Card.Text>

                                            <Button variant="primary"> Go </Button>

                                            {isEnrolled ? (
                                                <Button
                                                    variant="danger"
                                                    className="float-end"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleUnenroll(course._id);
                                                    }}
                                                >
                                                    Unenroll
                                                </Button>
                                            ) : (
                                                <Button
                                                    variant="success"
                                                    className="float-end"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        handleEnroll(course._id);
                                                    }}
                                                >
                                                    Enroll
                                                </Button>
                                            )}

                                            {isFaculty && (
                                                <>
                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        event.stopPropagation();
                                                        handleDeleteCourse(course._id);
                                                    }} className="btn btn-danger float-end me-2"
                                                            id="wd-delete-course-click">
                                                        Delete
                                                    </button>
                                                    <button id="wd-edit-course-click"
                                                            onClick={(event) => {
                                                                event.preventDefault();
                                                                event.stopPropagation();
                                                                handleSetCourse(course);
                                                            }}
                                                            className="btn btn-warning me-2 float-end">
                                                        Edit
                                                    </button>
                                                </>
                                            )}
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}