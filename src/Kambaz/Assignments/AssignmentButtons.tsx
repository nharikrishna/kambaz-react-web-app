import {BsGripVertical} from "react-icons/bs";
import {MdOutlineAssignment} from "react-icons/md";

export default function AssignmentButton() {
    return (
        <div>
            <BsGripVertical className="fs-3"/>
            <MdOutlineAssignment className="fs-3 text-success"/>
        </div>
    )
}