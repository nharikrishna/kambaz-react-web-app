import {Button, ListGroup, Row, Col} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Courses/Modules/LessonControlButtons.tsx";
import AssignmentTitleButtons from "./AssignmentTitleButtons.tsx";
import AssignmentButton from "./AssignmentButtons.tsx";
import {FaPlus} from "react-icons/fa6";

export default function Assignments() {
    return (
        <div id="wd-assignments" className="col-sm-11">
            <Row>
                <Col xs={6}>
                    <input className="form-control me-2" type="text"
                           placeholder="🔍 Search.."
                           id="wd-search-assignment"/>
                </Col>
                <Col xs={6}>
                    <Button variant="danger" className="me-2 float-end">
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        Assignment
                    </Button>
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
                    <ListGroup className="wd-assignment-list rounded-0">
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <Row>
                                <Col xs={2} className="m-auto"><AssignmentButton/></Col>
                                <Col xs={8}>
                                    <a href="#/Kambaz/Courses/5100/Assignments/1"
                                       className="wd-assignment-link text-decoration-none text-black">
                                        <b>A1</b>
                                        <p>
                                            <span className="text-danger">Multiple Modules </span>
                                            |
                                            <b> Not available until</b> May 6 at 12:00 am |
                                            <br/><b> Due</b> May 13 at 11:59 pm | 100 pts
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={2} className="m-auto"><LessonControlButtons/></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <Row>
                                <Col xs={2} className="m-auto"><AssignmentButton/></Col>
                                <Col xs={8}>
                                    <a href="#/Kambaz/Courses/5100/Assignments/1"
                                       className="wd-assignment-link text-decoration-none text-black">
                                        <b>A2</b>
                                        <p>
                                            <span className="text-danger">Multiple Modules </span>
                                            |
                                            <b> Not available until</b> May 13 at 12:00 am |
                                            <br/><b> Due</b> May 20 at 11:59 pm | 100 pts
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={2} className="m-auto"><LessonControlButtons/></Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <Row>
                                <Col xs={2} className="m-auto"><AssignmentButton/></Col>
                                <Col xs={8}>
                                    <a href="#/Kambaz/Courses/5100/Assignments/1"
                                       className="wd-assignment-link text-decoration-none text-black">
                                        <b>A3</b>
                                        <p>
                                            <span className="text-danger">Multiple Modules </span>
                                            |
                                            <b> Not available until</b> May 20 at 12:00 am |
                                            <br/><b> Due</b> May 27 at 11:59 pm | 100 pts
                                        </p>
                                    </a>
                                </Col>
                                <Col xs={2} className="m-auto"><LessonControlButtons/></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
