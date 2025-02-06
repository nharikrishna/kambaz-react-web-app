export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form id="wd-assignments-editor-form">
                <div className="mb-4">
                    <label htmlFor="wd-name" className="col-sm-3 col-form-label"><b>Assignment
                        Name</b></label>
                    <div className="col-sm-9">
                        <input id="wd-name" value="A1 - ENV + HTML" className="form-control"/>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="col-sm-9">
                <textarea id="wd-description" className="form-control" rows={7}>
                    The assignment is available online Submit a link to the landing page of
                </textarea>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-points"
                           className="col-sm-3 col-form-label"><b>Points</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <input id="wd-points" value={100} className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-group" className="col-sm-3 col-form-label"><b>Assignment
                        Group</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <select id="wd-group" className="form-select">
                            <option>ASSIGNMENTS</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label"><b>Display
                        Grade as</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <select id="wd-display-grade-as" className="form-select">
                            <option>Percentage</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label"><b>Submission
                        Type</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
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

                <div className="row mb-3">
                    <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label"><b>Assign
                        to</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <input id="wd-assign-to" value="Everyone" className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="wd-due-date" className="col-sm-3 col-form-label"><b>Due Date</b></label>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <input type="date" value="2024-05-13" id="wd-due-date"
                               className="form-control"/>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <label htmlFor="wd-available-from" className="col-form-label"><b>Available
                            From</b></label>
                        <input type="date" value="2024-05-06" id="wd-available-from"
                               className="form-control"/>
                    </div>
                    <div className="col-sm-3" style={{minWidth: '250px'}}>
                        <label htmlFor="wd-available-until" className="col-form-label"><b>Until</b></label>
                        <input type="date" value="2024-05-20" id="wd-available-until"
                               className="form-control"/>
                    </div>
                </div>

                <hr/>
                <button className="btn btn-danger me-2 float-end">Save</button>
                <button className="btn btn-secondary me-2 float-end">Cancel</button>
            </form>
        </div>


    );
}
