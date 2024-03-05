import { useState, useRef } from "react";

function List() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");
  const [items, setItems] = useState<{ text: string; emoji: string }[]>([]);
  const [emoji, setEmoji] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (inputRef.current) {
      setValue(event.target.value);
    }
  };

  const handleClick = () => {
    if (value === "" || emoji === "") {
      alert("You may not create empty items!");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      setItems([...items, { text: value, emoji }]);
      setValue("");

      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleEmojiChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    setEmoji(event.target.value);
  };

  return (
    <div className="container">
      <fieldset>
        <legend>List</legend>
        <input
          ref={inputRef}
          value={value}
          onChange={handleChange}
          type="text"
          name="text"
          id="text-two"
        />
        <label htmlFor="emoji-select">Choose a emoji:</label>
        <select name="emoji" id="emoji-select" onChange={handleEmojiChange}>
          <option value="">--Please choose an option--</option>
          <option value="🐶">🐶</option>
          <option value="🐱">🐱</option>
          <option value="🐹">🐹</option>
          <option value="🦜">🦜</option>
          <option value="🕷️">🕷️</option>
          <option value="🐠">🐠</option>
        </select>
        <button onClick={handleClick}>Click me!</button>
      
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.emoji} {item.text}
          </li>
        ))}
      </ul>
      </fieldset>
    </div>
  );
}

export default List;
