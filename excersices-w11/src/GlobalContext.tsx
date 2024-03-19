import { createContext } from "react";
import { initialTeachers, Teacher } from "./TeacherContext";
import { initialStudents, Student } from "./StudentContext";

type GlobalState = {
    students: Student[],
    teachers: Teacher[]
}

export const intialGlobalState: GlobalState = {
    students: initialStudents,
    teachers: initialTeachers
}

export const GlobalStateContext = createContext(intialGlobalState)

