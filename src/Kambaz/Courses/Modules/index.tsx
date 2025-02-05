import {ListGroup} from "react-bootstrap";
import ModulesControls from "./ModulesControls.tsx";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import LessonControlButtons from "./LessonControlButtons.tsx";

export default function Modules() {
    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ListGroup className="rounded-0" id="wd-modules">
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            LESSON 1 </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            LESSON 2 </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 1
                                </li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 2
                                </li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Slides</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development
                                </li>
                                <li className="wd-content-item">Creating a HTTP Server with Node.js
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">HTML Basics</li>
                                <li className="wd-content-item">React Basics</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 3
                                </li>
                                <li className="wd-content-item">Full Stack Developer - Chapter 4
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 3</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">CSS Basics</li>
                                <li className="wd-content-item">CSS + Bootstrap</li>
                            </ul>
                        </li>
                        <li className="wd-lesson">
                            <span className="wd-title">Reading</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - Chapter 5
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

