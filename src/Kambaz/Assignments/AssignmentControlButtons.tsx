import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "../Courses/Modules/GreenCheckmark";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer.ts";

interface LessonControlButtonsProps {
    assignmentId?: string;
}

export default function AssignmentControlButtons({ assignmentId }: LessonControlButtonsProps) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = () => {
        if (assignmentId) {
            dispatch(deleteAssignment(assignmentId));
        }
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