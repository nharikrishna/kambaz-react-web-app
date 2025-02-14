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
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 1 <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 2 <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Slides <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Introduction to Web Development <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Creating a HTTP Server with Node.js <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> HTML Basics <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> React Basics <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 3 <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 4 <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>

                <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary"> Week 3 </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> CSS Basics <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> CSS + Bootstrap <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> Full Stack Developer - Chapter 5 <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

