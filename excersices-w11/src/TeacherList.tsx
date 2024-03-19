import { GlobalStateContext } from "./GlobalContext";

import { useContext } from "react";

const TeacherList = () => {
  const data = useContext(GlobalStateContext);

  return (
    <div>
      <h2>TeacherList</h2>
      <ul>
        {data.teachers.map((t) => {
          return (
            <div key={t.id}>
              <li>
                Name: {t.name}, Age: {t.age}, City: {t.city}
              </li>

              <ul>
                Likes:
                {t.likes.map((like, index) => (
                  <li key={index}>{like}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TeacherList;
