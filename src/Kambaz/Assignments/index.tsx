import {Button, ListGroup, Row, Col} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import AssignmentTitleButtons from "./AssignmentTitleButtons.tsx";
import AssignmentButton from "./AssignmentButtons.tsx";
import {FaPlus} from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlButtons.tsx";

export default function Assignments() {
    const { cid } = useParams();

    const assignments = useSelector((state: any) =>
        state.assignmentReducer?.assignments?.filter((a: any) => a.course_id === cid) || []
    );

    console.log("Assignments", assignments);

    return (
        <div id="wd-assignments" className="col-sm-11">
            <Row>
                <Col xs={6}>
                    <input className="form-control me-2" type="text"
                           placeholder="🔍 Search.."
                           id="wd-search-assignment"/>
                </Col>
                <Col xs={6}>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments/new`} className="text-decoration-none">
                        <Button variant="danger" className="me-2 float-end">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Assignment
                        </Button>
                    </Link>
                    <Button variant="secondary" className="me-2 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Group
                    </Button>
                </Col>
            </Row>
            <br/>

            <ListGroup className="rounded-0" id="wd-assignments-title">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/> Assignments
                        <AssignmentTitleButtons/>
                        <div className="float-end me-1" style={{
                            border: "2px solid grey",
                            borderRadius: "15px",
                            padding: "2px"}}>40% of Total</div>
                    </div>
                    <ListGroup>
                        {assignments.map((assignment: any) => (
                            <ListGroup.Item key={assignment.id} className="wd-assignment-list-item p-0 fs-5 border-gray">
                                <Row>
                                    <Col xs={2} className="m-auto"><AssignmentButton /></Col>
                                    <Col xs={8}>
                                        <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment.id}`}
                                              className="wd-assignment-link text-decoration-none text-black">
                                            <b>{assignment.title}</b>
                                            <p>
                                                <span className="text-danger">Multiple Modules </span>
                                                |
                                                <b> Not available until</b> {assignment.not_available_until} |
                                                <br /><b> Due</b> {assignment.due} | {assignment.points}
                                            </p>
                                        </Link>
                                    </Col>
                                    <Col xs={2} className="m-auto">
                                        <AssignmentControlButtons assignmentId={assignment.id} />
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}