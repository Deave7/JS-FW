import './student.css'

const data = [
    {
        name: "Lisa",
        age: 32,
        student: true
    },
    {
        name: "Sten",
        age: 23,
        student: true
    },
    {
        name: "Mio",
        age: 46,
        student: true
    },
];

const Student = () => {
    return (
    <>
    <p>{data[0].student ? `Student: ${data[0].name}, Age: ${data[0].age}` : "-"}</p>
    <p>{data[1].student ? `Student: ${data[1].name}, Age: ${data[1].age}` : "-"}</p>
    <p>{data[2].student ? `Student: ${data[2].name}, Age: ${data[2].age}` : "-"}</p>
    </>

    );
}

export default Student; 
