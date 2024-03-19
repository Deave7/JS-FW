import { useContext, useRef, useState } from "react";
import { GlobalStateContext } from "./GlobalContext";
import { Teacher } from "./TeacherContext";

function SearchTeacher() {
    const data = useContext(GlobalStateContext)
    const [value, setValue] = useState('')
    const [searchResult, setSearchResult] = useState<Teacher[]>([])
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
            const inputValue = value;

            const searchResult = data.teachers.filter((teacher) => 
                teacher.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            setSearchResult(searchResult)
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }


    return ( 
        <>
        <input placeholder="Searh here :)" ref={inputRef} value={value} onChange={handleChange} type="text" />
        <button onClick={handleClick}>Click me!</button>

        <ul>
            {searchResult.map((teacher, index) => (
                <div key={index}>
                    <li>Name: {teacher.name} City: {teacher.city} Age: {teacher.age}</li>
                    <ul>
                        Likes:
                        {teacher.likes.map((like, index) => 
                            <li key={index}>{like}</li>
                        )}
                    </ul>
                </div>
            ))}
        </ul>
        </>
     );
}

export default SearchTeacher;