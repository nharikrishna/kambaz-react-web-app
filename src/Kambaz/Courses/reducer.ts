import { createSlice } from "@reduxjs/toolkit";

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
    enrolledCourses: [] as Course[],
    allCourses: [] as Course[],
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
        addCourse: (state, { payload: course }) => {
            state.allCourses = [...state.allCourses, course] as Course[];
            state.enrolledCourses = [...state.enrolledCourses, course] as Course[];
        },
        deleteCourse: (state, { payload: courseId }) => {
            state.allCourses = state.allCourses.filter(
                (c: Course) => c._id !== courseId
            );
            state.enrolledCourses = state.enrolledCourses.filter(
                (c: Course) => c._id !== courseId
            );
        },
        updateCourse: (state) => {
            state.allCourses = state.allCourses.map((c: Course) =>
                c._id === state.currentCourse._id ? state.currentCourse : c
            ) as Course[];
            state.enrolledCourses = state.enrolledCourses.map((c: Course) =>
                c._id === state.currentCourse._id ? state.currentCourse : c
            ) as Course[];
        },
        setCourse: (state, { payload: course }) => {
            state.currentCourse = course;
        },
        setEnrolledCourses: (state, { payload: courses }) => {
            state.enrolledCourses = courses;
        },
        setAllCourses: (state, { payload: allCourses }) => {
            state.allCourses = allCourses;
        },
        updateCourseField: (state, { payload: { field, value } }) => {
            state.currentCourse = {
                ...state.currentCourse,
                [field]: value
            };
        }
    },
});

export const {
    addCourse,
    deleteCourse,
    updateCourse,
    setCourse,
    setEnrolledCourses,
    setAllCourses,
    updateCourseField
} = coursesSlice.actions;
export default coursesSlice.reducer;