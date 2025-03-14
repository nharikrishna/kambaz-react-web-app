import {useParams} from "react-router-dom";
import * as db from "../../Database";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import LessonControlButtons from "./LessonControlButtons.tsx";
import ModulesControls from "./ModulesControls.tsx";

export default function Modules() {
    const {cid} = useParams();
    const modules = db.modules;

    return (
        <div>
            <ModulesControls/><br/><br/><br/><br/>
            <div>
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li key={module._id}
                                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3"/> {module.name}
                                    <ModuleControlButtons/>
                                </div>

                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li key={lesson._id}
                                                className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical
                                                    className="me-2 fs-3"/> {lesson.name}
                                                <LessonControlButtons/>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </div>

        </div>
    );
}

