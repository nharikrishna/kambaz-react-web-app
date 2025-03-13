import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

interface Course {
    _id: string;
    name: string;
    number?: string;
    startDate?: string;
    endDate?: string;
    description: string;
    logo: string;
}

const initialState = {
    courses: courses,
    currentCourse: {
        _id: "1234",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
        logo: "/images/5800_logo.png"
    }
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        addCourse: (state) => {
            const newCourse = {
                ...state.currentCourse,
                _id: uuidv4()
            };
            state.courses = [...state.courses, newCourse] as Course[];
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (c: Course) => c._id !== courseId
            );
        },
        updateCourse: (state) => {
            state.courses = state.courses.map((c: Course) =>
                c._id === state.currentCourse._id ? state.currentCourse : c
            ) as Course[];
        },
        setCourse: (state, { payload: course }) => {
            state.currentCourse = course;
        },
        updateCourseField: (state, { payload: { field, value } }) => {
            state.currentCourse = {
                ...state.currentCourse,
                [field]: value
            };
        }
    },
});

export const { addCourse, deleteCourse, updateCourse, setCourse, updateCourseField } =
    coursesSlice.actions;
export default coursesSlice.reducer;