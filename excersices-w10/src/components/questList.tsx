import { useState } from 'react';

type Quest = {
    id: number;
    complete: boolean;
    description: string;
}

const QuestList = () => {
    const startQuests: Quest[] = [
        {
            id: 1, complete: false, description: 'Train my best friend to level 100'
        },
        {
            id: 2, complete: false, description: 'Catch em all'
        },
        {
            id: 3, complete: false, description: 'Become the very best'
        }
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [quests, setQuests] = useState(startQuests)

    return (
        <>
            <fieldset>
            <h1>Quest List</h1>
            <ul>
                {quests.map((q: Quest) => {
                    return <li key={q.id}>{q.description}</li>
                })}
            </ul>
            </fieldset>
        </>
    )

}


export default QuestList;
