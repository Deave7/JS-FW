import StudentList from "./StudentList";
import TeacherList from "./TeacherList";
import { GlobalStateContext, intialGlobalState } from "./GlobalContext";
import SearchTeacher from "./SearchTeacher";
import Vehicle from "./Vehicle";



function App() {
	return (
    <>
    <GlobalStateContext.Provider value={intialGlobalState}>
			<h1>Student Context Demo Stuff</h1>
			<StudentList />
      <TeacherList/>
      <SearchTeacher/>
    </GlobalStateContext.Provider>

    <Vehicle vehicles={[
                {
                    brand: 'Toyota',
                    color: 'Red',
                    model: 'Camry',
                    name: 'Car1',
                    horsePower: 200,
                    wheels: 4,
                    towbar: true,
                },
                {
                    brand: 'Yamaha',
                    color: 'Blue',
                    model: 'YZF-R6',
                    name: 'Motorcycle1',
                    horsePower: 120,
                    wheels: 2,
                },
                {
                    brand: 'Sea Ray',
                    color: 'White',
                    model: 'Sundancer 260',
                    name: 'Boat1',
                    horsePower: 300,
                    engineIn: true,
                },
            ]}/>

    </>
	);
}

export default App;
