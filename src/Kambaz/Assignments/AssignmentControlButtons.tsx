import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {deleteAssignment, setAssignments} from "./reducer.ts";
import * as assignmentClient from "./client.ts";
import {findAssignmentsForCourse} from "../Courses/client.ts";

interface LessonControlButtonsProps {
    assignmentId?: string;
    courseId?: string;
}

export default function AssignmentControlButtons({ assignmentId, courseId }: LessonControlButtonsProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (assignmentId) {
            await assignmentClient.deleteAssignment(assignmentId);
            dispatch(deleteAssignment(assignmentId));
        }
        const assignments = await findAssignmentsForCourse(courseId);
        console.log(assignments);
        dispatch(setAssignments(assignments));
        setShowDeleteModal(false);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
    };

    return (
        <div className="float-end">
            <GreenCheckmark />
            <FaTrash
                className="text-danger me-2 mb-1"
                onClick={handleDeleteClick}
                style={{ cursor: 'pointer' }}
            />
            <IoEllipsisVertical className="fs-4" />

            <Modal show={showDeleteModal} onHide={handleCancelDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCancelDelete}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleConfirmDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}