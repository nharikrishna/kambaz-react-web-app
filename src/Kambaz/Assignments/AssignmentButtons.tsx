import {BsGripVertical} from "react-icons/bs";
import {MdOutlineAssignment} from "react-icons/md";

export default function AssignmentButton() {
    return (
        <div className="float-start">
            <BsGripVertical className="me-2 fs-3"/>
            <MdOutlineAssignment className="me-2 fs-3"/>
        </div>
    )
}