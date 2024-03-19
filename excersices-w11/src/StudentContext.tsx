// contexten som lagrar alla studenter (namn)

import { createContext } from 'react';
import uuid from 'react-uuid';

export type Student = {
    id: string,
    name: string,
    city: string,
    age: number,
}

export const initialStudents: Student[] = [
    {
        id: uuid(),
        name: "Bosse",
        city: "Borås",
        age: 34
    },
    {
        id: uuid(),
        name: "Stina",
        city: "Borås",
        age: 46
    },
    {
        id: uuid(),
        name: "Kim",
        city: "Borås",
        age: 26
    },
    {
        id: uuid(),
        name: "Anton",
        city: "Lindköping",
        age: 27
    },
    {
        id: uuid(),
        name: "Maja",
        city: "Lindköping",
        age: 24
    },
    {
        id: uuid(),
        name: "Dennis",
        city: "Lindköping",
        age: 14
    },
    {
        id: uuid(),
        name: "Alex",
        city: "Lindköping",
        age: 15
    },
    {
        id: uuid(),
        name: "Hampus",
        city: "Lindköping",
        age: 17
    },
];

export const StudentContext = createContext([] as Student[]);