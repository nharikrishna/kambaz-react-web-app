import {Button, Col, ListGroup, Row} from "react-bootstrap";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Courses/Modules/LessonControlButtons.tsx";
import AssignmentTitleButtons from "./AssignmentTitleButtons.tsx";
import AssignmentButton from "./AssignmentButtons.tsx";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <Row className="p-0 mb-3">
                <Col xs={8}>
                    <input className="form-control float-start me-2" type="text"
                           placeholder="🔍 Search.."
                           id="wd-search-assignment"/>

                </Col>
                <Col xs={2}>
                    <Button className="btn-secondary float-end me-2">+ Group</Button>
                </Col>
                <Col xs={2}>
                    <Button className="btn-danger me-2" float-end>+ Assignment</Button>
                </Col>
            </Row>

            <ListGroup className="rounded-0" id="wd-assignments-title">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/> Assignments
                        <AssignmentTitleButtons/>
                        <div className="float-end me-2"> 40% of Total</div>
                    </div>
                    <ListGroup className="wd-assignment-list rounded-0">
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <AssignmentButton/>
                            <a href="#/Kambaz/Courses/5100/Assignments/1"
                               className="wd-assignment-link">
                                A1 - HTML
                            </a>
                            <LessonControlButtons/>
                            <p className="p-2">
                                <span className="text-danger">Multiple Modules </span>
                                |
                                <b> Not available until</b> May 6 at 12:00 am |
                                <b> Due</b> May 13 at 11:59 pm | 100 pts
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <AssignmentButton/>
                            <a href="#/Kambaz/Courses/5100/Assignments/1"
                               className="wd-assignment-link">
                                A2 - CSS + BOOTSTRAP
                            </a>
                            <LessonControlButtons/>
                            <p className="p-2">
                                <span className="text-danger">Multiple Modules </span>
                                |
                                <b> Not available until</b> May 13 at 12:00 am |
                                <b> Due</b> May 20 at 11:59 pm | 100 pts
                            </p>
                        </ListGroup.Item>
                        <ListGroup.Item
                            className="wd-assignment-list-item p-0 fs-5 border-gray">
                            <AssignmentButton/>
                            <a href="#/Kambaz/Courses/5100/Assignments/1"
                               className="wd-assignment-link">
                                A3 - JAVASCRIPT + REACT
                            </a>
                            <LessonControlButtons/>
                            <p className="p-2">
                                <span className="text-danger">Multiple Modules </span>
                                |
                                <b> Not available until</b> May 20 at 12:00 am |
                                <b> Due</b> May 27 at 11:59 pm | 100 pts
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
