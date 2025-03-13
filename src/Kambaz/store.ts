import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentReducer from "./Assignments/reducer";
import coursesReducer from "./Courses/reducer";
import enrollmentsReducer from "./Enrollments/reducer";

const store = configureStore({
    reducer: {
        modulesReducer,
        accountReducer,
        assignmentReducer,
        coursesReducer,
        enrollmentsReducer
    },
});
export default store;