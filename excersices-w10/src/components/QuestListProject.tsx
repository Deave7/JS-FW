import { useState } from 'react';


type Quest = {
    id: number;
    content: string;
    complete: boolean;
}

function QuestListProject() {

    const starterQuests: Quest[] = [
        {
            id: 1, complete: false, content: 'Rescue Hyrule from the twilight'
        },
        {
            id: 2, complete: false, content: 'Retake Hyrule from Ganondorfs evil rule'
        },
        {
            id: 3, complete: false, content: 'Retrieve the pieces of the Triforce'
        },
        {
            id: 4, complete: false, content: 'Sail the seas with the King of Red Lions to save your sister'
        },
    ]

    const [quests, setQuests] = useState<Quest[]>(starterQuests)
    
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
          const id = parseInt(event.target.name)
          setQuests(prevQuests => prevQuests.map(quest => quest.id === id ? {...quest, complete: event.target.checked} : quest))
          }
    

    return (
      <>
        <fieldset>
          <legend>Q U E S T L I S T !</legend>
          <div>
            <ul>
              {quests.map((quest: Quest) => (
                <li key={quest.id} style={{listStyle: 'none'}}>
                  <input
                    type="checkbox"
                    name={`${quest.id}`}
                    checked={quest.complete}
                    onChange={handleChange}
                  />
                  <label htmlFor={`${quest.id}`} style={{ backgroundColor: quest.complete ? 'green' : ''}}>{quest.content}</label>
                </li>
              ))}
            </ul>
          </div>
        </fieldset>
      </>
    );
}


export default QuestListProject;
