export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <form id="wd-assignments-editor-form">
                <label htmlFor="wd-name"><h3><b>Assignment Name</b></h3></label>
                <input id="wd-name" value="A1 - ENV + HTML"/><br/><br/>
                <textarea id="wd-description">
                    The assignment is available online Submit a link to the landing page of
                </textarea>
                <br/><br/>

                <label htmlFor="wd-points">Points </label>
                <input id="wd-points" value={100}/>
                <br/><br/>

                <label htmlFor="wd-group">Assignment Group </label>
                <select id="wd-group">
                    <option>ASSIGNMENTS</option>
                </select>
                <br/><br/>

                <label htmlFor="wd-display-grade-as">Display Grade as </label>
                <select id="wd-display-grade-as">
                    <option>Percentage</option>
                </select>
                <br/><br/>

                <label htmlFor="wd-submission-type">Submission Type </label>
                <select id="wd-submission-type">
                    <option>Online</option>
                </select>
                <br/>

                <p>Online Entry Options</p>
                <input id="wd-text-entry" type="checkbox"/>
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br/>

                <input id="wd-website-url" type="checkbox"/>
                <label htmlFor="wd-website-url">Website URL</label>
                <br/>

                <input id="wd-media-recordings" type="checkbox"/>
                <label htmlFor="wd-media-recordings">Media RecordingsL</label>
                <br/>

                <input id="wd-student-annotation" type="checkbox"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br/>

                <input id="wd-file-upload" type="checkbox"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
                <br/><br/>

                <label htmlFor="wd-assign-to">Assign to </label>
                <input id="wd-assign-to" value="Everyone"/>
                <br/><br/>

                <label htmlFor="wd-due-date">Due Date: </label>
                <input type="date"
                       value="2024-05-13"
                       id="wd-due-date"/>
                <br/><br/>

                <label htmlFor="wd-available-from">Available From: </label>
                <input type="date"
                       value="2024-05-06"
                       id="wd-available-from"/>
                <label htmlFor="wd-available-until"> Until: </label>
                <input type="date"
                       value="2024-05-20"
                       id="wd-available-until"/><br/>

                <hr/>
                <button>Cancel</button>
                <button>Submit</button>
            </form>
        </div>
    )
}
