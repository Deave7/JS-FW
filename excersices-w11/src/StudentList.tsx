// komponent för att visa alla studenter (namn)

import { GlobalStateContext } from "./GlobalContext";
import { useContext, useState } from "react";


const StudentList = () => {
	const data = useContext(GlobalStateContext);
    const [isOverAge, setIsOverAge] = useState(false)
    const [isUnderAge, setIsUnderAge] = useState(false)
    const [all, setAll ] = useState(true)

    const handleRadioChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setIsOverAge(value === 'overage');
        setIsUnderAge(value === 'underage');
        setAll(value === 'all');
    };

	return (
		<div>
			<h2>StudentList</h2>
            <div>
            <input onChange={handleRadioChange} type="radio" name="age" value="underage"  checked={isUnderAge}/>
            <label htmlFor="underage">Under 18</label>
            <input onChange={handleRadioChange} type="radio" name="age" value="overage" checked={isOverAge} />
            <label htmlFor="overage"> 18 and up</label>
            <input onChange={handleRadioChange} type="radio" name="age" value="all" checked={all} defaultChecked />
            <label htmlFor="all">All</label>
            </div>
			<ul>
                {all ? (
                    data.students.map((student) => (
                        <li key={student.id}>Name: {student.name} Age: {student.age}</li>
                    ))
                ) : isUnderAge ? (
                    data.students.filter((student) => student.age < 18).map((student) => (
                        <li key={student.id}>Name: {student.name} Age: {student.age}</li>
                    ))
                ) : isOverAge ? (
                    data.students.filter((student) => student.age >= 18).map((student) => (
                        <li key={student.id}>Name: {student.name} Age: {student.age}</li>
                    ))
                ) : null}
            </ul>
            
            
            
            
            <ul>
				{data.students.map((s) => {
					return (
						<li key={s.id}>
							Name: {s.name}, Age: {s.age}, City: {s.city}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default StudentList;