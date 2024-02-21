import "./app.css"
import Header from "./components/header";
import CheckAge from "./components/CheckAge";
import Student from "./components/student";

const App = () => {
    return (
        <div>
        <Header></Header>
        <CheckAge></CheckAge>
        <Student></Student>
        </div>
        
    )
}

export default App;