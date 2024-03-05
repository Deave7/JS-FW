import { useState } from "react";
import './PrettyText.css'

const SETTINGS = {BOLD: 'bold', ITALICS: 'italics', LARGE: 'large'}

type Settings = {
    bold: boolean;
    italics: boolean;
    large: boolean;
}
function PrettyText() {
   const [settings, setSettings] = useState({
    bold: false,
    italics: false,
    large: false,
   } as Settings)

   const [text, setText] = useState('')
   const [publish, setPublish] = useState(false)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublish(false)
    switch(e.target.name) {
        case SETTINGS.BOLD:
				setSettings({ ...settings, bold: !settings.bold });
				break;
			case SETTINGS.ITALICS:
				setSettings({ ...settings, italics: !settings.italics });
				break;
			case SETTINGS.LARGE:
				setSettings({ ...settings, large: !settings.large });
				break;
    }

   }

   const handleClick = () => {
    setPublish(true)
   }

   const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPublish(false);
    setText(e.target.value)
   }



    return ( 
        <>
        <fieldset>
            <legend>Pretty Text</legend>
            <input type="text" onChange={handleTextChange} />

            <input type="checkbox" name={SETTINGS.BOLD} onChange={handleChange} />
            <label htmlFor="{SETTINGS.BOLD}">Bold</label>
            <input type="checkbox" name={SETTINGS.ITALICS} onChange={handleChange} />
            <label htmlFor="{SETTINGS.ITALICS}">Italics</label>
            <input type="checkbox" name={SETTINGS.LARGE} onChange={handleChange} />
            <label htmlFor="{SETTINGS.LARGE}">Large</label>

            <button onClick={handleClick}>Click me!</button>
            
            {publish ? ( <p className={`${settings.bold && "bold"} ${settings.italics && "italics"} ${settings.large && "large"}`}>
					{text}
				</p>
			) : (
				<p></p>
			)}

        </fieldset>
        </>
     );
}

export default PrettyText;