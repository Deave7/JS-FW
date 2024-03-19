import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import { GlobalStateContext, intialGlobalState } from "./GlobalContext";
import SearchTeacher from "./SearchTeacher";

function App() {
	return (
    <>
    <GlobalStateContext.Provider value={intialGlobalState}>
			<h1>Student Context Demo Stuff</h1>
			<StudentList />
      <TeacherList/>
      <SearchTeacher/>
    </GlobalStateContext.Provider>

    </>
	);
}

export default App;
