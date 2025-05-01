import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

const initialState = {
    enrollments: enrollments,
    originalEnrollments: enrollments
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment = {
                ...enrollment,
                _id: uuidv4()
            };
            state.enrollments = [...state.enrollments, newEnrollment] as Enrollment[];
        },
        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (e: Enrollment) => e._id !== enrollmentId
            );
        },
        updateEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.map((e: Enrollment) =>
                e._id === enrollment._id ? enrollment : e
            ) as Enrollment[];
        },
        resetEnrollments: (state) => {
            state.enrollments = state.originalEnrollments;
        }
    },
});

export const { addEnrollment, deleteEnrollment, updateEnrollment, resetEnrollments } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;