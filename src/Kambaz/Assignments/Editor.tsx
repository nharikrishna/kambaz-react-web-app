import { Col } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

interface Assignment {
    id: string;
    title: string;
    course: string;
    course_id: string;
    not_available_until: string;
    due: string;
    points: string;
    not_available_until_date: string;
    due_date: string;
    description: string;
    available_until?: string;
    editing?: boolean;
}

export default function AssignmentEditor() {
    const { cid, aid } = useParams<{ cid: string; aid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignmentFromStore = useSelector((state: any) =>
        state.assignmentReducer?.assignments?.find((a: Assignment) => a.id === aid)
    );


    const [assignment, setAssignment] = useState<Assignment>({
        id: aid === "new" ? "" : aid || "",
        title: "",
        course: "",
        course_id: cid || "",
        not_available_until: "",
        due: "",
        points: "100",
        not_available_until_date: "",
        due_date: "",
        description: ""
    });

    useEffect(() => {
        if (assignmentFromStore && aid !== "new") {
            setAssignment({
                ...assignmentFromStore,
                description: assignmentFromStore.description || ""
            });
        }
    }, [assignmentFromStore, aid]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setAssignment(prev => ({
            ...prev,
            [id.replace('wd-', '')]: value
        }));
    };

    const formatDateForDisplay = (dateString: string): string => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        }) + " at 12:00 AM";
    };

    const handleSave = (): void => {
        const assignmentToSave: Assignment = {
            ...assignment,
            not_available_until: formatDateForDisplay(assignment.not_available_until_date),
            due: formatDateForDisplay(assignment.due_date),
            points: assignment.points + " pts"
        };

        if (aid === "new") {
            dispatch(addAssignment(assignmentToSave));
        } else {
            dispatch(updateAssignment(assignmentToSave));
        }

        navigate(`/Kambaz/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <form id="wd-assignments-editor-form" onSubmit={(e) => e.preventDefault()}>
                <div className="flex-fill">
                    <div className="mb-4">
                        <label htmlFor="wd-title" className="col-sm-3 col-form-label"><b>Assignment Name</b></label>
                        <div className="col-sm-10">
                            <input
                                id="wd-title"
                                value={assignment.title}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="wd-description" className="col-sm-3 col-form-label"><b>Description</b></label>
                        <div className="col-sm-10">
                            <textarea
                                id="wd-description"
                                value={assignment.description}
                                onChange={handleChange}
                                className="form-control"
                                rows={7}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mb-8 flex-fill align-content-center mb-3">
                    <Col xs="3">
                        <label htmlFor="wd-points" className="float-end">Points</label>
                    </Col>
                    <Col xs="9">
                        <div className="col-sm-10" style={{minWidth: '250px', maxWidth: '550px'}}>
                            <input
                                id="wd-points"
                                value={assignment.points}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </Col>
                </div>

                <div className="row mb-8 flex-fill align-content-center mb-3">
                    <Col xs="3">
                        <label htmlFor="wd-group" className="float-end">Assignment Group</label>
                    </Col>
                    <Col xs="9">
                        <div className="col-sm-10" style={{minWidth: '250px', maxWidth: '550px'}}>
                            <select id="wd-group" className="form-select">
                                <option>ASSIGNMENTS</option>
                            </select>
                        </div>
                    </Col>
                </div>

                <div className="row mb-8 flex-fill align-content-center mb-3">
                    <Col xs="3">
                        <label htmlFor="wd-display-grade-as" className="float-end">Display Grade as</label>
                    </Col>
                    <Col xs="9">
                        <div className="col-sm-10" style={{minWidth: '250px', maxWidth: '550px'}}>
                            <select id="wd-display-grade-as" className="form-select">
                                <option>Percentage</option>
                            </select>
                        </div>
                    </Col>
                </div>

                <div className="row mb-8 flex-fill align-content-center mb-3">
                    <Col xs="3">
                        <label htmlFor="wd-submission-type" className="float-end">Submission Type</label>
                    </Col>
                    <Col xs="9">
                        <div className="col-sm-10" style={{
                            border: "2px solid lightgrey",
                            borderRadius: "15px",
                            padding: "15px",
                            maxWidth: '550px'
                        }}>
                            <div className="row mb-3">
                                <div style={{minWidth: '250px'}}>
                                    <select id="wd-submission-type" className="form-select">
                                        <option>Online</option>
                                    </select>
                                </div>
                            </div>

                            <p><b>Online Entry Options</b></p>
                            <div className="d-flex align-items-center mb-3">
                                <input id="wd-text-entry" type="checkbox" className="me-2"/>
                                <label htmlFor="wd-text-entry">Text Entry</label>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <input id="wd-website-url" type="checkbox" className="me-2"/>
                                <label htmlFor="wd-website-url">Website URL</label>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <input id="wd-media-recordings" type="checkbox" className="me-2"/>
                                <label htmlFor="wd-media-recordings">Media Recordings</label>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <input id="wd-student-annotation" type="checkbox" className="me-2"/>
                                <label htmlFor="wd-student-annotation">Student Annotation</label>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <input id="wd-file-upload" type="checkbox" className="me-2"/>
                                <label htmlFor="wd-file-upload">File Uploads</label>
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="row mb-8 flex-fill align-content-center mb-3">
                    <Col xs={3}>
                        <div className="float-end">Assign</div>
                    </Col>
                    <Col xs={9}>
                        <div className="col-sm-10" style={{
                            border: "2px solid lightgrey",
                            borderRadius: "15px",
                            padding: "15px",
                            maxWidth: '550px'
                        }}>
                            <div>
                                <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label"><b>Assign to</b></label>
                                <div className="col-sm-3" style={{minWidth: '250px'}}>
                                    <input id="wd-assign-to" value="Everyone" className="form-control"/>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="wd-due_date" className="col-sm-3 col-form-label"><b>Due Date</b></label>
                                <div className="col-sm-3" style={{minWidth: '250px'}}>
                                    <input
                                        type="date"
                                        id="wd-due_date"
                                        value={assignment.due_date}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-sm-3" style={{minWidth: '250px'}}>
                                    <label htmlFor="wd-not_available_until_date" className="col-form-label">
                                        <b>Available From</b>
                                    </label>
                                    <input
                                        type="date"
                                        id="wd-not_available_until_date"
                                        value={assignment.not_available_until_date}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-sm-3" style={{minWidth: '250px'}}>
                                    <label htmlFor="wd-available-until" className="col-form-label"><b>Until</b></label>
                                    <input
                                        type="date"
                                        id="wd-available-until"
                                        value={assignment.available_until || ""}
                                        onChange={handleChange}
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </Col>
                </div>

                <div className="col-sm-10">
                    <hr/>
                    <button
                        className="btn btn-danger me-2 float-end"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                    <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="text-decoration-none">
                        <button className="btn btn-secondary me-2 float-end">
                            Cancel
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}