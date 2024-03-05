import { useRef, useState } from "react";

function ChangeText() {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (value === "") {
      alert("Nothing happens if you try to input a empty string...");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      if (inputRef.current) {
        setValue(inputRef.current.value);
        inputRef.current.focus();
      }
    }
  };

  return (
    <>
      <fieldset>
        <legend>Change Text</legend>
        <input
          type="text"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Click Me!</button>
        <p>{value}</p>
      </fieldset>
    </>
  );
}

export default ChangeText;

/*
import { useRef, useState } from "react";

function ChangeText() {
	const [changedText, setChangedText] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (inputRef.current) {
			setChangedText(inputRef.current.value);
		}
	};
	return (
		<div>
			<div>
				Din text här: <input type="text" ref={inputRef} />
			</div>
			<div>
				<button onClick={handleClick}>Ändra text</button>
			</div>
			<div>
				Texten: <p>{changedText}</p>
			</div>
		</div>
	);
}

export default ChangeText;
*/
