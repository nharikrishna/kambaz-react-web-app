import {useParams} from "react-router-dom";
import { addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons.tsx";
import LessonControlButtons from "./LessonControlButtons.tsx";
import ModulesControls from "./ModulesControls.tsx";
import {useState} from "react";
import {FormControl} from "react-bootstrap";

export default function Modules() {
    const {cid} = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const isFaculty = currentUser && currentUser.role === "FACULTY";

    return (
        <div className="wd-modules">
            {isFaculty && (
                <ModulesControls
                    setModuleName={setModuleName}
                    moduleName={moduleName}
                    addModule={() => {
                        dispatch(addModule({name: moduleName, course: cid}));
                        setModuleName("");
                    }}
                />
            )}

            {isFaculty && <><br/><br/><br/><br/></>}

            <div>
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li key={module._id}
                                className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="wd-title p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3"/>
                                    {(!module.editing || !isFaculty) && module.name}
                                    {module.editing && isFaculty && (
                                        <FormControl className="w-50 d-inline-block"
                                                     onChange={(e) =>
                                                         dispatch(updateModule({ ...module, name: e.target.value }))}
                                                     onKeyDown={(e) => {
                                                         if (e.key === "Enter") {
                                                             dispatch(updateModule({ ...module, editing: false }));
                                                         }
                                                     }}
                                                     defaultValue={module.name}/>
                                    )}

                                    {isFaculty && (
                                        <ModuleControlButtons
                                            moduleId={module._id}
                                            deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
                                            editModule={(moduleId) => dispatch(editModule(moduleId))}
                                        />
                                    )}
                                </div>

                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li key={lesson._id}
                                                className="wd-lesson list-group-item p-3 ps-1">
                                                <BsGripVertical
                                                    className="me-2 fs-3"/> {lesson.name}
                                                {/* Only show lesson control buttons to faculty */}
                                                {isFaculty && <LessonControlButtons/>}
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