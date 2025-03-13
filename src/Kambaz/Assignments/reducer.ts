import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                id: assignment.id || uuidv4(),
                title: assignment.title,
                course: assignment.course,
                course_id: assignment.course_id,
                not_available_until: assignment.not_available_until,
                due: assignment.due,
                points: assignment.points,
                not_available_until_date: assignment.not_available_until_date,
                due_date: assignment.due_date,
                description: assignment.description || ""
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a.id !== assignmentId);
        },
        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map((a: any) =>
                a.id === assignment.id ? assignment : a
            ) as any;
        },
        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map((a: any) =>
                a.id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;