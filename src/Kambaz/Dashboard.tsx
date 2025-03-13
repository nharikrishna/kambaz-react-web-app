import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { addCourse, deleteCourse, updateCourse, setCourse, updateCourseField } from "./Courses/reducer";

export default function Dashboard() {
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { courses, currentCourse } = useSelector((state: any) => state.coursesReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

    const isFaculty = currentUser && currentUser.role === "FACULTY";

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

    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
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
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .filter((course: any) =>
                            enrollments.some(
                                (enrollment: any) =>
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course: any) => (
                            <Col key={course._id} className="wd-dashboard-course" style={{width: "300px"}}>
                                <Card>
                                    <Link to={`/Kambaz/Courses/${course._id}/Home`}
                                          className="wd-dashboard-course-link text-decoration-none text-dark">
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
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                handleDeleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                Delete
                                            </button>
                                            <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        handleSetCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end">
                                                Edit
                                            </button>

                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
}