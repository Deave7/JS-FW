import { createContext } from "react";
import uuid from 'react-uuid';

export type Teacher = {
    id: string,
    name: string,
    city: string,
    age: number,
    likes: string[]
}

export const initialTeachers: Teacher[] = [
    {
        id: uuid(),
        name: 'Nicklas' ,
        city: 'Borås',
        age: 35,
        likes: ['Programming', 'League of Legends', 'Nerd stuff' ]
    },
    {
        id: uuid(),
        name: 'Lars' ,
        city: 'Borås',
        age: 50,
        likes: ['Programming', 'Teaching', 'Being cool af']
    },

    {
        id: uuid(),
        name: 'Andreas' ,
        city: 'Borås',
        age: 30,
        likes: ['Programming', 'live coding'] 
    },
]

export const TeacherContext = createContext([] as Teacher[])
